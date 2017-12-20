import * as crypto from 'crypto';
import * as dateFormat from 'dateformat';
import * as axios from 'axios';
import { CustomerDao } from "../resort-customers/resort-customer.dao";
import { MailchimpDao } from "../mailchimp/mailchimp.dao";

export class BokunDAO {
    private accessKey: string;
    private secretKey: string;
    private hostname: string;
    private vendorList: any[];
    private axios;
    private checkForBookings;
    private customerDao: CustomerDao;
    private mailchimpDao: MailchimpDao;

    constructor() {
        this.vendorList = [];
        this.accessKey = 'a2d9749ac9cd4cb38a79760add3431d0' //'8b7a383322094b8dbfb7ee1fbaea850c';
        this.secretKey = 'c1938ca317c54de09b0aafb9223c4a0c'//'7eb38618b26a4e72b8adcc743e6281b7';
        this.hostname = 'api.bokun.io';
        this.axios = axios;
        this.axios.defaults.baseURL = 'https://api.bokun.io';
        this.customerDao = new CustomerDao();
        this.mailchimpDao = new MailchimpDao('');
    }

    private getCustomerByName (customers, name) {
        for (let i in customers) {
            if (customers[i].contact.name === name) {
                return customers[i];
            }
        }
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

    public checkAndDoCampaigns () {
        this.queryBookings(false, 0)
            .then(async bookings => {
                const customers = await this.customerDao.getAll();
                for (let i in bookings['results']) {
                    let booking = bookings['results'][i];
                    const campaigns = await this.mailchimpDao.getCampaignsForBooking(booking.id);
                    let customer = this.getCustomerByName(customers, booking.vendor.title);
                    if (!customer) {
                        continue;
                    }
                    if (!booking.status.cancellationDate) {
                        if (campaigns.length) {
                            continue;
                        }
                        try {
                            await this.mailchimpDao.addMemberToList(customer.listId, {
                                "email_address": booking.customer.email,
                                "status": "subscribed"
                            });
                        } catch (err) {
                            // already a member do nothing
                        }
                        let booked = await this.mailchimpDao.createCampaign({
                            recipients: {list_id: customer.listId},
                            type: 'regular',
                            settings: {
                                title: booking.id + '_booked',
                                template_id: parseInt(customer.booked.templateId),
                                from_name: customer.contact.name,
                                subject_line: 'Booking of ' + customer.contact.name + ' produt.',
                                reply_to: customer.contact.email
                            }
                        });
                        await this.mailchimpDao.performCampaignAction(booked.id, 'send', {});
                        let beforeDate = new Date (
                            new Date(booking.startDate).getTime() - 3
                        );
                        if (new Date().getTime() < beforeDate.getTime()) {
                            let before = await this.mailchimpDao.createAndScheduleCampaign({
                                recipients: {list_id: customer.listId},
                                type: 'regular',
                                settings: {
                                    title: booking.id + '_check-in',
                                    template_id: parseInt(customer['check-in'].templateId),
                                    from_name: customer.contact.name,
                                    subject_line: 'Booking of ' + customer.contact.name + ' produt.',
                                    reply_to: customer.contact.email
                                }
                            }, beforeDate);
                        }
                        let afterDate = new Date (
                            new Date(booking.endDate).getTime() + 3
                        );
                        if (new Date().getTime() < afterDate.getTime()) {
                            let after = await this.mailchimpDao.createAndScheduleCampaign({
                                recipients: {list_id: customer.listId},
                                type: 'regular',
                                settings: {
                                    title: booking.id + '_check-out',
                                    template_id: parseInt(customer['check-out'].templateId),
                                    from_name: customer.contact.name,
                                    subject_line: 'Booking of ' + customer.contact.name + ' produt.',
                                    reply_to: customer.contact.email
                                }
                            }, afterDate);
                        }
                    } else {
                        let has = false;
                        for (let i in campaigns) {
                            if (/cancellation/.test(campaigns[i].title)) {
                                has = true;
                            } else {
                                await this.mailchimpDao.deleteCampaign(campaigns[i].id);
                            }
                        }
                        if (!has) {
                            let cancellation = await this.mailchimpDao.createCampaign({
                                recipients: {list_id: customer.listId},
                                type: 'regular',
                                settings: {
                                    title: booking.id + '_cancellation',
                                    template_id: customer.cancellation.templateId,
                                    from_name: customer.contact.name,
                                    subject_line: 'Booking of ' + customer.contact.name + ' produt.',
                                    reply_to: customer.contact.email
                                }
                            });
                        }
                    }
                }
            })
            .catch(error => {
                console.error(error);
            });
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
