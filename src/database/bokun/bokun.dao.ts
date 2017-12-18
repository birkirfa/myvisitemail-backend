import * as crypto from 'crypto';
import * as dateFormat from 'dateformat';
import * as axios from 'axios';

export class BokunDAO {
    private accessKey: string;
    private secretKey: string;
    private hostname: string;
    private vendorList: any[];
    private axios;

    constructor() {
        this.vendorList = [];
        this.accessKey = '8b7a383322094b8dbfb7ee1fbaea850c';
        this.secretKey = '7eb38618b26a4e72b8adcc743e6281b7';
        this.hostname = 'api.bokun.io';
        this.axios = axios;
        this.axios.defaults.baseURL = 'https://api.bokun.io';
    }

    private encodeSignature(date, method, path) {
        return crypto.createHmac('sha1', this.secretKey)
            .update(
            date + this.accessKey + method + path
            ).digest('base64');
    }

    private prepareHttpOptions(method, path) {
        const date = dateFormat(new Date(), 'yyyy-mm-dd HH:mm:ss');
        this.axios.defaults.headers.common['X-Bokun-Date'] = date;
        this.axios.defaults.headers.common['X-Bokun-AccessKey'] = this.accessKey;
        this.axios.defaults.headers.common['X-Bokun-Signature'] = this.encodeSignature(date, method, path);
    }

    private ProcessItemsResponse(response, data, extrapolateItems) {
        const result = JSON.parse(data.toString());
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

    private containsVendor(vendorTitle) {
        for (const key in this.vendorList) {
            if (this.vendorList[key]) {
                const vendor = this.vendorList[key];
                if (vendor['title'] === vendorTitle) {
                    return key;
                }
            }
        }
        return -1;
    }

    private extractAllVendorsFromProducts(products: any[]) {
        for (const key in products) {
            if (products[key]) {
                const product = products[key];
                const item = product[product['productCategory'].toLowerCase()];
                let vendor = {};
                const vendorIndex = this.containsVendor(item['vendor']['title']);
                if (vendorIndex < 0) {
                    vendor = item['vendor'];
                    vendor['rooms'] = 0;
                    for (const innerKey in item['roomTypes']) {
                        if (item['roomTypes']) {
                            const roomType = item['roomTypes'][innerKey];
                            vendor['rooms'] += roomType['roomCount'];
                        }
                    }
                    this.vendorList.push(vendor);
                } else {
                    for (const roomType in item['roomTypes']) {
                        if (item['roomTypes'][roomType]) {
                            this.vendorList[vendorIndex]['rooms'] += roomType['roomCount'];
                        }
                    }
                }
            }
        }
    }

    /**
     * think about some clever data handlers
     * @returns {Promise<any>}
     */
    getProductList() {
        return new Promise((resolve, reject) => {
            this.prepareHttpOptions(
                'GET', '/product-list.json/list'
            );
            this.axios.get('/product-list.json/list')
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getProductsFromListBySlug(listSlug: string) {
        return new Promise((resolve, reject) => {
            this.prepareHttpOptions(
                'GET', '/product-list.json/slug/' + listSlug
            );
            this.axios.get('/product-list.json/slug/' + listSlug)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getProductsFromListById(listId: number) {
        return new Promise((resolve, reject) => {
            this.prepareHttpOptions(
                'GET', '/product-list.json/' + listId
            );
            this.axios.get('/product-list.json/' + listId)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getAccomodationById(accommodationId) {
        return new Promise((resolve, reject) => {
            const options = this.prepareHttpOptions(
                'GET', '/accommodation.json/' + accommodationId + '?lang=EN'
            );
            this.axios.get('/accommodation.json/' + accommodationId + '?lang=EN')
                .then(res => resolve(JSON.parse(res)))
                .catch(err => reject(err));
        });
    }

    queryBookings(buildQuery: boolean, accommodationId: number) {
        return new Promise((resolve, reject) => {
            this.prepareHttpOptions(
                'POST', '/booking.json/product-booking-search'
            );
            const queryObj = buildQuery ? { productIds: [accommodationId] } : {};
            this.axios.post('/booking.json/product-booking-search', queryObj)
                .then(res => resolve(res.data))
                .catch(err => reject(err.response.data));
        });
    }

    getProductsWithBookings() {
        const productList = this.getProductList();
        const bookings = [];
        for (const key in productList) {
            if (productList[key]) {
                const productByKey = productList[key];
                let products = this.getProductsFromListById(productByKey.id);
                products = products['items'];
                for (const index in products) {
                    if (products[index]) {
                        const product = products[index];
                        const item = product[product['productCategory'].toLowerCase()];
                        const booking = this.queryBookings(true, item.id);
                        bookings.push({
                            bookings: booking['results'],
                            location: item['location']
                        });
                    }
                }
            }
        }
        return bookings;
    }
}