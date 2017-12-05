import * as https from 'https';
import * as crypto from 'crypto';
import * as dateFormat from 'dateformat';

export class BokunDAO {
    private accessKey: string;
    private secretKey: string;
    private hostname: string;
    private vendorList: Array<Object>;
    constructor () {
        this.vendorList = [];
        this.accessKey = 'a2d9749ac9cd4cb38a79760add3431d0';
        this.secretKey = 'c1938ca317c54de09b0aafb9223c4a0c';
        this.hostname = 'api.bokun.io';
        this.getProductsFromListBySlug('test')
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    private encodeSignature (date, method, path) {
        return crypto.createHmac('sha1', this.secretKey)
            .update(
                date + this.accessKey + method + path
            ).digest('base64');
    }

    private prepareHttpOptions (method, path) {
        let date = dateFormat(new Date(), 'yyyy-mm-dd HH:mm:ss');
        let options;
        return {
            hostname: this.hostname,
            path: path,
            headers: {
                'X-Bokun-Date': date,
                'X-Bokun-AccessKey': this.accessKey,
                'X-Bokun-Signature': this.encodeSignature(date, method, path)
            }
        };
    }

    private ProcessItemsResponse (response, data, extrapolateItems) {
        let result = JSON.parse(data.toString());
        if (response.statusCode >= 200 && response.statusCode <= 206) {
            if (extrapolateItems) {
                return (result.items || []);
            } else {
                return result;
            }
        } else {
            throw (result);
        }
    }

    private containsVendor (vendorTitle) {
        for (let key in this.vendorList) {
            let vendor = this.vendorList[key];
            if (vendor['title'] === vendorTitle) {
                return key;
            }
        }
        return -1;
    }

    private extractAllVendorsFromProducts (products: Array<Object>) {
        for (let key in products) {
            let product = products[key];
            let item = product[product['productCategory'].toLowerCase()];
            let vendor = {};
            let vendorIndex = this.containsVendor(item['vendor']['title']);
            if (vendorIndex < 0) {
                vendor = item['vendor'];
                vendor['rooms'] = 0;
                for (let key in item['roomTypes']) {
                    let roomType = item['roomTypes'][key];
                    vendor['rooms'] += roomType['roomCount'];
                }
                this.vendorList.push(vendor);
            } else {
                for (let roomType in item['roomTypes']) {
                    this.vendorList[vendorIndex]['rooms'] += roomType['roomCount'];
                }
            }
        }
    }

    /**
     * think about some clever data handlers
     * @returns {Promise<any>}
     */
    getProductList () {
        return new Promise((resolve, reject) => {
            let options = this.prepareHttpOptions (
                'GET', '/product-list.json/list'
            );
            const req = https.get(options, (res) => {
                res.on('data', async (data) => {
                    resolve (await this.ProcessItemsResponse (
                        res, data, false
                    ));
                });
            });
        });
    }

    getProductsFromListBySlug (listSlug:string) {
        return new Promise((resolve, reject) => {
            let options = this.prepareHttpOptions (
                'GET', '/product-list.json/slug/' + listSlug
            );
            const req = https.get(options, (res) => {
                res.on('data', async (data) => {
                    let result;
                    try {
                        result = this.ProcessItemsResponse (
                            res, data, true);
                    } catch (error) {
                        reject (error);
                        return;
                    }
                    this.extractAllVendorsFromProducts(result);
                    resolve(this.vendorList);
                });
            });
        });
    }

    getProductsFromListById (listId:number) {
        return new Promise((resolve, reject) => {
            let options = this.prepareHttpOptions (
                'GET', '/product-list.json/' + listId
            );
            const req = https.get(options, (res) => {
                res.on('data', async (data) => {
                    resolve (await this.ProcessItemsResponse (
                        res, data, true
                    ));
                });
            });
        });
    }

    getAccomodationById (accommodationId) {
        return new Promise((resolve, reject) => {
            let options = this.prepareHttpOptions (
                'GET', '/accommodation.json/' + accommodationId + '?lang=EN'
            );
            const req = https.get(options, (res) => {
                res.on('data', (d) => {
                    let result = JSON.parse(d.toString());
                    if (res.statusCode === 200) {
                        resolve(result);
                    } else {
                        reject (result);
                    }
                });
            });
        });
    }
}