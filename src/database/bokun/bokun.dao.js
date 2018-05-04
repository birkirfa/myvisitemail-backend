"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const dateFormat = require("dateformat");
const axios_1 = require("axios");
const resort_customer_dao_1 = require("../resort-customers/resort-customer.dao");
const mailchimp_dao_1 = require("../mailchimp/mailchimp.dao");
const moment = require("moment-timezone");
const BOKUN_DEFAULT_ACCESS_KEY = '639a5e7b041c469b947a72b8e5ee2ba6'; // '639a5e7b041c469b947a72b8e5ee2ba6'
const BOKUN_DEFAULT_SECRET_KEY = 'e7f8849d74e34f29b34c857123be7503'; // 'e7f8849d74e34f29b34c857123be7503'
const RESOURCE_NOT_FOUND_STATUS = 404;
const BAD_REQUEST_STATUS = 400;


export interface IAccessHeaderCreator {
create(method: string, path: string): any;
}

class BokunAccessHeaderCreator {
    constructor(accessKey = BOKUN_DEFAULT_ACCESS_KEY, secretKey = BOKUN_DEFAULT_SECRET_KEY) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }
    encodeSignature(date, method, path) {
        return crypto.createHmac('sha1', this.secretKey)
            .update(date + this.accessKey + method + path).digest('base64');
    }
    create(method, path) {
        const date = dateFormat(new Date(), 'yyyy-mm-dd HH:mm:ss');
        const headers = {
            'X-Bokun-Date': date,
            'X-Bokun-AccessKey': this.accessKey,
            'X-Bokun-Signature': this.encodeSignature(date, method, path)
        };
        return headers;
    }
}
exports.BokunAccessHeaderCreator = BokunAccessHeaderCreator;
class BokunDAO {
    constructor() {
        this.vendorList = [];
        this.hostname = 'api.bokun.io'; // api.bokuntest.com ;
        this.channel = 'myVisitTesting';
        this.axios = axios_1.default;
        this.axios.defaults.baseURL = 'https://api.bokun.io'; // https://api.bokuntest.com
        this.customerDao = new resort_customer_dao_1.CustomerDao();
        this.mailchimpDao = new mailchimp_dao_1.MailchimpDao('');
        // this.allowedMails = [
        //     'sunna@ferdavefir.is',
        //     'Sunna@ferdavefir.is',
        //     'birkir@ysland.is'
        // ];
    }
    getCustomerByName(customers, name) {
        for (let i in customers) {
            if (customers[i].contact.name === name) {
                return customers[i];
            }
        }
    }
    ProcessItemsResponse(response, data, extrapolateItems) {
        const result = JSON.parse(data.toString());
        if (response.statusCode >= 200 && response.statusCode <= 206) {
            if (extrapolateItems) {
                return (result.items || []);
            }
            else {
                return result;
            }
        }
        else {
            throw (result);
        }
    }
    containsVendor(vendorTitle) {
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
    extractAllVendorsFromProducts(products) {
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
                }
                else {
                    for (const roomType in item['roomTypes']) {
                        if (item['roomTypes'][roomType]) {
                            this.vendorList[vendorIndex]['rooms'] += roomType['roomCount'];
                        }
                    }
                }
            }
        }
    }
    async prepareDataForCampaigns() {
        try {
            // Creating list of customers with their corresponding booking list
            const customersToBookingsZip = [];
            const customers = await this.customerDao.getAll();
            for (const customer of customers) {
                const accessKey = customer.APIAccess && customer.APIAccess.bokun.accessKey;
                const secretKey = customer.APIAccess && customer.APIAccess.bokun.secretKey;
                if (!accessKey || !secretKey) {
                    console.log(`Access keys for customer ${customer.contact.name} are missing`);
                    continue;
                }
                const accessHeaderCreator = new BokunAccessHeaderCreator(accessKey, secretKey);
                let bookings;
                try {
                    bookings = (await this.queryBookings(false, 0, accessHeaderCreator)).results;
                }
                catch (err) {
                    // a catch that guards against errors for clients with wrong apiKeys
                    // This corresponds to human error while adding and test clients
                    continue;
                }
                // .filter((booking) =>
                //     this.allowedMails.indexOf(booking.customer.email) !== -1
                // );
                if (bookings && bookings.length) {
                    customersToBookingsZip.push({
                        customer,
                        bookings
                    });
                }
            }
            return customersToBookingsZip;
        }
        catch (err) {
            throw new Error(`Preparing data for campaigns has failed: ${err.toString()}`);
        }
    }
    async createCampagins() {
        const customersToBookingsZip = await this.prepareDataForCampaigns();
        for (const { customer, bookings } of customersToBookingsZip) {
            for (const booking of bookings) {
                console.log(`Creating campaigns for: ${booking.customer.email}`);
                let campaignList;
                try {
                    campaignList = await this.mailchimpDao.addMemberList(booking.customer, customer.contact);
                }
                catch (err) {
                    throw new Error(`Creating member list has failed: ${err.toString()}`);
                }
                let campaigns;
                try {
                    campaigns = await this.mailchimpDao.getCampaignsForBooking(booking.creationDate);
                }
                catch (err) {
                    throw new Error(`Getting campaigns has failed: ${err.toString()}`);
                }
                if (booking.status !== 'CANCELLED') {
                    if (campaigns.length) {
                        continue;
                    }
                    let booked;
                    try {
                        booked = await this.mailchimpDao.createCampaign({
                            recipients: { list_id: campaignList.id },
                            type: 'regular',
                            settings: {
                                title: booking.creationDate + '_booked',
                                template_id: parseInt(customer.booked.templateId),
                                from_name: customer.contact.name,
                                subject_line: (customer.booked.subject ||
                                    'Booking of ' + customer.contact.name + ' produt.'),
                                reply_to: customer.contact.email
                            }
                        });
                    }
                    catch (err) {
                        throw new Error(`Creating campaign has failed: ${err.toString()}`);
                    }
                    const sendDate = new Date();
                    sendDate.setMinutes(new Date().getMinutes() + 5);
                    try {
                        await this.mailchimpDao.performCampaignAction(booked.id, 'schedule', {
                            schedule_time: sendDate
                        });
                    }
                    catch (err) {
                        if (err.status !== BAD_REQUEST_STATUS) {
                            throw new Error(`Performing campaign has failed: ${err.toString()}`);
                        }
                    }
                    const beforeDate = new Date(booking.startDate);
                    beforeDate.setDate(beforeDate.getDate() - 3);
                    if (new Date().getTime() < beforeDate.getTime()) {
                        try {
                            await this.mailchimpDao.createAndScheduleCampaign({
                                recipients: { list_id: campaignList.id },
                                type: 'regular',
                                settings: {
                                    title: booking.creationDate + '_check-in',
                                    template_id: parseInt(customer['check-in'].templateId),
                                    from_name: customer.contact.name,
                                    subject_line: (customer['check-in'].subject ||
                                        'Check-in of ' + customer.contact.name + ' produt.'),
                                    reply_to: customer.contact.email
                                }
                            }, beforeDate);
                        }
                        catch (err) {
                            throw new Error(`Creating and scheduling campaign has failed: ${err.toString()}`);
                        }
                    }
                    const afterDate = new Date(booking.endDate);
                    afterDate.setDate(afterDate.getDate() + 3);
                    if (new Date().getTime() < afterDate.getTime()) {
                        try {
                            await this.mailchimpDao.createAndScheduleCampaign({
                                recipients: { list_id: campaignList.id },
                                type: 'regular',
                                settings: {
                                    title: booking.creationDate + '_check-out',
                                    template_id: parseInt(customer['check-out'].templateId),
                                    from_name: customer.contact.name,
                                    subject_line: (customer['check-out'].subject ||
                                        'Check-out of ' + customer.contact.name + ' produt.'),
                                    reply_to: customer.contact.email
                                }
                            }, afterDate);
                        }
                        catch (err) {
                            throw new Error(`Creating and scheduling campaign has failed: ${err.toString()}`);
                        }
                    }
                }
                else {
                    let has = false;
                    for (let i in campaigns) {
                        if (/cancellation/.test(campaigns[i].settings.title)) {
                            has = true;
                        }
                        else {
                            try {
                                await this.mailchimpDao.deleteCampaign(campaigns[i].settings.id);
                            }
                            catch (err) {
                                // If campaign is already deleted just continue, throw an error otherwise
                                if (err.status !== RESOURCE_NOT_FOUND_STATUS) {
                                    throw new Error(`Deleting campaign has failed: ${err.toString()}`);
                                }
                            }
                        }
                    }
                    if (!has) {
                        let cancellation;
                        try {
                            cancellation = await this.mailchimpDao.createCampaign({
                                recipients: { list_id: campaignList.id },
                                type: 'regular',
                                settings: {
                                    title: booking.creationDate + '_cancellation',
                                    template_id: parseInt(customer.cancellation.templateId),
                                    from_name: customer.contact.name,
                                    subject_line: (customer.cancellation.subject ||
                                        'Cancellation of ' + customer.contact.name + ' produt.'),
                                    reply_to: customer.contact.email
                                }
                            });
                        }
                        catch (err) {
                            throw new Error(`Creating campaign has failed: ${err.toString()}`);
                        }
                        const sendDate = new Date();
                        sendDate.setMinutes(new Date().getMinutes() + 5);
                        try {
                            await this.mailchimpDao.performCampaignAction(cancellation.id, 'schedule', {
                                schedule_time: sendDate
                            });
                        }
                        catch (err) {
                            if (err.status !== BAD_REQUEST_STATUS) {
                                throw new Error(`Performing campaign has failed: ${err.toString()}`);
                            }
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
    getProductList(accessHeaderCreator = new BokunAccessHeaderCreator()) {
        return new Promise((resolve, reject) => {
            const axiosHttpOptions = {
                method: 'GET',
                url: '/product-list.json/list'
            };
            axiosHttpOptions.headers = Object.assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1.default(axiosHttpOptions)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
    getProductsFromListBySlug(listSlug, accessHeaderCreator = new BokunAccessHeaderCreator()) {
        return new Promise((resolve, reject) => {
            const axiosHttpOptions = {
                method: 'GET',
                url: `/product-list.json/slug/${listSlug}`
            };
            axiosHttpOptions.headers = Object.assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1.default(axiosHttpOptions)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
    getProductsFromListById(listId, accessHeaderCreator = new BokunAccessHeaderCreator()) {
        return new Promise((resolve, reject) => {
            const axiosHttpOptions = {
                method: 'GET',
                url: `/product-list.json/${listId}`
            };
            axiosHttpOptions.headers = Object.assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1.default(axiosHttpOptions)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
    getAccomodationById(accommodationId, accessHeaderCreator = new BokunAccessHeaderCreator()) {
        return new Promise((resolve, reject) => {
            const axiosHttpOptions = {
                method: 'GET',
                url: `/accommodation.json/${accommodationId}`,
                params: {
                    lang: 'EN'
                }
            };
            axiosHttpOptions.headers = Object.assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1.default(axiosHttpOptions)
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    }
    queryBookings(buildQuery, accommodationId, accessHeaderCreator = new BokunAccessHeaderCreator()) {
        return new Promise((resolve, reject) => {
            const axiosHttpOptions = {
                method: 'POST',
                url: '/booking.json/product-booking-search',
                data: {
                    pageSize: 1
                }
            };
            axiosHttpOptions.headers = Object.assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            const fromDate = new Date();
            fromDate.setHours(new Date().getHours() - 1);
            const creationDateRange = {
                from: moment.tz(fromDate, 'Atlantic/Reykjavik'),
                includeLower: true,
                includeUpper: true,
                to: moment.tz(new Date(), 'Atlantic/Reykjavik')
            };
            axios_1.default(axiosHttpOptions)
                .then(res => {
                axiosHttpOptions.data = buildQuery ?
                    {
                        creationDateRange: creationDateRange,
                        productIds: [accommodationId],
                        pageSize: res.data.totalHits
                    } :
                    {
                        creationDateRange: creationDateRange,
                        pageSize: res.data.totalHits
                    };
                axios_1.default(axiosHttpOptions)
                    .then(resp => resolve(resp.data))
                    .catch(err => reject(err.response.data));
            })
                .catch(err => reject(err));
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
exports.BokunDAO = BokunDAO;
//# sourceMappingURL=bokun.dao.js.map