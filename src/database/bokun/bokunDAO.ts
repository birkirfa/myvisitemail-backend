import * as crypto from 'crypto';
import * as dateFormat from 'dateformat';
import * as axios  from 'axios';

export class BokunDAO {
    private accessKey: string;
    private secretKey: string;
    private hostname: string;
    private vendorList: Array<Object>;
    private axios;

    constructor () {
        this.vendorList = [];
        this.accessKey = 'a2d9749ac9cd4cb38a79760add3431d0';
        this.secretKey = 'c1938ca317c54de09b0aafb9223c4a0c';
        this.hostname = 'api.bokun.io';
        this.axios = axios;
        this.axios.defaults.baseURL = 'https://api.bokun.io';
    }

    private encodeSignature (date, method, path) {
        return crypto.createHmac('sha1', this.secretKey)
            .update(
                date + this.accessKey + method + path
            ).digest('base64');
    }

    private prepareHttpOptions (method, path) {
        let date = dateFormat(new Date(), 'yyyy-mm-dd HH:mm:ss');
        this.axios.defaults.headers.common['X-Bokun-Date'] = date;
        this.axios.defaults.headers.common['X-Bokun-AccessKey'] = this.accessKey;
        this.axios.defaults.headers.common['X-Bokun-Signature'] = this.encodeSignature(date, method, path);
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
            this.prepareHttpOptions (
                'GET', '/product-list.json/list'
            );
            this.axios.get('/product-list.json/list')
                .then(res => resolve(res.data))
                .catch(err => reject (err));
        });
    }

    getProductsFromListBySlug (listSlug:string) {
        return new Promise((resolve, reject) => {
            this.prepareHttpOptions (
                'GET', '/product-list.json/slug/' + listSlug
            );
            this.axios.get('/product-list.json/slug/' + listSlug)
                .then(res => resolve(res.data))
                .catch(err => reject (err));
        });
    }

    getProductsFromListById (listId:number) {
        return new Promise((resolve, reject) => {
            this.prepareHttpOptions (
                'GET', '/product-list.json/' + listId
            );
            this.axios.get('/product-list.json/' + listId)
                .then(res => resolve(res.data))
                .catch(err => reject (err));
        });
    }

    getAccomodationById (accommodationId) {
        return new Promise((resolve, reject) => {
            let options = this.prepareHttpOptions (
                'GET', '/accommodation.json/' + accommodationId + '?lang=EN'
            );
            this.axios.get('/accommodation.json/' + accommodationId + '?lang=EN')
                .then(res => resolve(JSON.parse(res)))
                .catch(err => reject (err));
        });
    }

    queryBookings (buildQuery: boolean, accommodationId: number) {
        return new Promise((resolve, reject) => {
            this.prepareHttpOptions (
                'POST', '/booking.json/product-booking-search'
            );
            let queryObj = buildQuery ? { "productIds": [accommodationId]}: {};
            this.axios.post('/booking.json/product-booking-search', queryObj)
                .then(res => resolve(res.data))
                .catch(err => reject(err.response.data));
        });
    }

    async getProductsWithBookings () {
        let productList = await this.getProductList();
        let bookings = [];
        for (const key in productList) {
            let product = productList[key];
            let products = await this.getProductsFromListById(product.id);
            products = products['items'];
            for (const index in products) {
                let product = products[index]
                let item = product[product['productCategory'].toLowerCase()]
                let booking = await this.queryBookings(true, item.id);
                bookings.push({
                    'bookings': booking['results'],
                    'location': item['location']
                });
            }
        }
        return bookings;
    }
}