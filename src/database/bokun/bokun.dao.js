"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var crypto = require("crypto");
var dateFormat = require("dateformat");
var axios_1 = require("axios");
var resort_customer_dao_1 = require("../resort-customers/resort-customer.dao");
var mailchimp_dao_1 = require("../mailchimp/mailchimp.dao");
var moment = require("moment-timezone");
var BOKUN_DEFAULT_ACCESS_KEY = '639a5e7b041c469b947a72b8e5ee2ba6'; // '639a5e7b041c469b947a72b8e5ee2ba6'
var BOKUN_DEFAULT_SECRET_KEY = 'e7f8849d74e34f29b34c857123be7503'; // 'e7f8849d74e34f29b34c857123be7503'
var RESOURCE_NOT_FOUND_STATUS = 404;
var BAD_REQUEST_STATUS = 400;
var BokunAccessHeaderCreator = /** @class */ (function () {
    function BokunAccessHeaderCreator(accessKey, secretKey) {
        if (accessKey === void 0) { accessKey = BOKUN_DEFAULT_ACCESS_KEY; }
        if (secretKey === void 0) { secretKey = BOKUN_DEFAULT_SECRET_KEY; }
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }
    BokunAccessHeaderCreator.prototype.encodeSignature = function (date, method, path) {
        return crypto.createHmac('sha1', this.secretKey)
            .update(date + this.accessKey + method + path).digest('base64');
    };
    BokunAccessHeaderCreator.prototype.create = function (method, path) {
        var date = dateFormat(new Date(), 'yyyy-mm-dd HH:mm:ss');
        var headers = {
            'X-Bokun-Date': date,
            'X-Bokun-AccessKey': this.accessKey,
            'X-Bokun-Signature': this.encodeSignature(date, method, path)
        };
        return headers;
    };
    return BokunAccessHeaderCreator;
}());
exports.BokunAccessHeaderCreator = BokunAccessHeaderCreator;
var BokunDAO = /** @class */ (function () {
    function BokunDAO() {
        this.vendorList = [];
        this.hostname = 'api.bokun.io'; // api.bokuntest.com ;
        this.channel = 'myVisitTesting';
        this.axios = axios_1["default"];
        this.axios.defaults.baseURL = 'https://api.bokun.io'; // https://api.bokuntest.com
        this.customerDao = new resort_customer_dao_1.CustomerDao();
        this.mailchimpDao = new mailchimp_dao_1.MailchimpDao('');
        // this.allowedMails = [
        //     'sunna@ferdavefir.is',
        //     'Sunna@ferdavefir.is',
        //     'birkir@ysland.is'
        // ];
    }
    BokunDAO.prototype.getCustomerByName = function (customers, name) {
        for (var i in customers) {
            if (customers[i].contact.name === name) {
                return customers[i];
            }
        }
    };
    BokunDAO.prototype.ProcessItemsResponse = function (response, data, extrapolateItems) {
        var result = JSON.parse(data.toString());
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
    };
    BokunDAO.prototype.containsVendor = function (vendorTitle) {
        for (var key in this.vendorList) {
            if (this.vendorList[key]) {
                var vendor = this.vendorList[key];
                if (vendor['title'] === vendorTitle) {
                    return key;
                }
            }
        }
        return -1;
    };
    BokunDAO.prototype.extractAllVendorsFromProducts = function (products) {
        for (var key in products) {
            if (products[key]) {
                var product = products[key];
                var item = product[product['productCategory'].toLowerCase()];
                var vendor = {};
                var vendorIndex = this.containsVendor(item['vendor']['title']);
                if (vendorIndex < 0) {
                    vendor = item['vendor'];
                    vendor['rooms'] = 0;
                    for (var innerKey in item['roomTypes']) {
                        if (item['roomTypes']) {
                            var roomType = item['roomTypes'][innerKey];
                            vendor['rooms'] += roomType['roomCount'];
                        }
                    }
                    this.vendorList.push(vendor);
                }
                else {
                    for (var roomType in item['roomTypes']) {
                        if (item['roomTypes'][roomType]) {
                            this.vendorList[vendorIndex]['rooms'] += roomType['roomCount'];
                        }
                    }
                }
            }
        }
    };
    BokunDAO.prototype.prepareDataForCampaigns = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customersToBookingsZip, customers, _i, customers_1, customer, accessKey, secretKey, accessHeaderCreator, bookings, err_1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        customersToBookingsZip = [];
                        return [4 /*yield*/, this.customerDao.getAll()];
                    case 1:
                        customers = _a.sent();
                        _i = 0, customers_1 = customers;
                        _a.label = 2;
                    case 2:
                        if (!(_i < customers_1.length)) return [3 /*break*/, 8];
                        customer = customers_1[_i];
                        accessKey = customer.APIAccess && customer.APIAccess.bokun.accessKey;
                        secretKey = customer.APIAccess && customer.APIAccess.bokun.secretKey;
                        if (!accessKey || !secretKey) {
                            console.log("Access keys for customer " + customer.contact.name + " are missing");
                            return [3 /*break*/, 7];
                        }
                        accessHeaderCreator = new BokunAccessHeaderCreator(accessKey, secretKey);
                        bookings = void 0;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.queryBookings(false, 0, accessHeaderCreator)];
                    case 4:
                        bookings = (_a.sent()).results;
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        // a catch that guards against errors for clients with wrong apiKeys
                        // This corresponds to human error while adding and test clients
                        return [3 /*break*/, 7];
                    case 6:
                        // .filter((booking) =>
                        //     this.allowedMails.indexOf(booking.customer.email) !== -1
                        // );
                        if (bookings && bookings.length) {
                            customersToBookingsZip.push({
                                customer: customer,
                                bookings: bookings
                            });
                        }
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/, customersToBookingsZip];
                    case 9:
                        err_2 = _a.sent();
                        throw new Error("Preparing data for campaigns has failed: " + err_2.toString());
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    BokunDAO.prototype.createCampagins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customersToBookingsZip, _i, customersToBookingsZip_1, _a, customer, bookings, _b, bookings_1, booking, campaignList, err_3, campaigns, err_4, booked, err_5, sendDate, err_6, beforeDate, err_7, afterDate, err_8, has, _c, _d, _e, i, err_9, cancellation, err_10, sendDate, err_11;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.prepareDataForCampaigns()];
                    case 1:
                        customersToBookingsZip = _f.sent();
                        _i = 0, customersToBookingsZip_1 = customersToBookingsZip;
                        _f.label = 2;
                    case 2:
                        if (!(_i < customersToBookingsZip_1.length)) return [3 /*break*/, 44];
                        _a = customersToBookingsZip_1[_i], customer = _a.customer, bookings = _a.bookings;
                        _b = 0, bookings_1 = bookings;
                        _f.label = 3;
                    case 3:
                        if (!(_b < bookings_1.length)) return [3 /*break*/, 43];
                        booking = bookings_1[_b];
                        console.log("Creating campaigns for: " + booking.customer.email);
                        campaignList = void 0;
                        _f.label = 4;
                    case 4:
                        _f.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.mailchimpDao.addMemberList(booking.customer, customer.contact)];
                    case 5:
                        campaignList = _f.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _f.sent();
                        throw new Error("Creating member list has failed: " + err_3.toString());
                    case 7:
                        campaigns = void 0;
                        _f.label = 8;
                    case 8:
                        _f.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, this.mailchimpDao.getCampaignsForBooking(booking.creationDate)];
                    case 9:
                        campaigns = _f.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        err_4 = _f.sent();
                        throw new Error("Getting campaigns has failed: " + err_4.toString());
                    case 11:
                        if (!(booking.status !== 'CANCELLED')) return [3 /*break*/, 28];
                        if (campaigns.length) {
                            return [3 /*break*/, 42];
                        }
                        booked = void 0;
                        _f.label = 12;
                    case 12:
                        _f.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, this.mailchimpDao.createCampaign({
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
                            })];
                    case 13:
                        booked = _f.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        err_5 = _f.sent();
                        throw new Error("Creating campaign has failed: " + err_5.toString());
                    case 15:
                        sendDate = new Date();
                        sendDate.setMinutes(new Date().getMinutes() + 5);
                        _f.label = 16;
                    case 16:
                        _f.trys.push([16, 18, , 19]);
                        return [4 /*yield*/, this.mailchimpDao.performCampaignAction(booked.id, 'schedule', {
                                schedule_time: sendDate
                            })];
                    case 17:
                        _f.sent();
                        return [3 /*break*/, 19];
                    case 18:
                        err_6 = _f.sent();
                        if (err_6.status !== BAD_REQUEST_STATUS) {
                            throw new Error("Performing campaign has failed: " + err_6.toString());
                        }
                        return [3 /*break*/, 19];
                    case 19:
                        beforeDate = new Date(booking.startDate);
                        beforeDate.setDate(beforeDate.getDate() - 3);
                        if (!(new Date().getTime() < beforeDate.getTime())) return [3 /*break*/, 23];
                        _f.label = 20;
                    case 20:
                        _f.trys.push([20, 22, , 23]);
                        return [4 /*yield*/, this.mailchimpDao.createAndScheduleCampaign({
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
                            }, beforeDate)];
                    case 21:
                        _f.sent();
                        return [3 /*break*/, 23];
                    case 22:
                        err_7 = _f.sent();
                        throw new Error("Creating and scheduling campaign has failed: " + err_7.toString());
                    case 23:
                        afterDate = new Date(booking.endDate);
                        afterDate.setDate(afterDate.getDate() + 3);
                        if (!(new Date().getTime() < afterDate.getTime())) return [3 /*break*/, 27];
                        _f.label = 24;
                    case 24:
                        _f.trys.push([24, 26, , 27]);
                        return [4 /*yield*/, this.mailchimpDao.createAndScheduleCampaign({
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
                            }, afterDate)];
                    case 25:
                        _f.sent();
                        return [3 /*break*/, 27];
                    case 26:
                        err_8 = _f.sent();
                        throw new Error("Creating and scheduling campaign has failed: " + err_8.toString());
                    case 27: return [3 /*break*/, 42];
                    case 28:
                        has = false;
                        _c = [];
                        for (_d in campaigns)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 29;
                    case 29:
                        if (!(_e < _c.length)) return [3 /*break*/, 34];
                        i = _c[_e];
                        if (!/cancellation/.test(campaigns[i].settings.title)) return [3 /*break*/, 30];
                        has = true;
                        return [3 /*break*/, 33];
                    case 30:
                        _f.trys.push([30, 32, , 33]);
                        return [4 /*yield*/, this.mailchimpDao.deleteCampaign(campaigns[i].settings.id)];
                    case 31:
                        _f.sent();
                        return [3 /*break*/, 33];
                    case 32:
                        err_9 = _f.sent();
                        // If campaign is already deleted just continue, throw an error otherwise
                        if (err_9.status !== RESOURCE_NOT_FOUND_STATUS) {
                            throw new Error("Deleting campaign has failed: " + err_9.toString());
                        }
                        return [3 /*break*/, 33];
                    case 33:
                        _e++;
                        return [3 /*break*/, 29];
                    case 34:
                        if (!!has) return [3 /*break*/, 42];
                        cancellation = void 0;
                        _f.label = 35;
                    case 35:
                        _f.trys.push([35, 37, , 38]);
                        return [4 /*yield*/, this.mailchimpDao.createCampaign({
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
                            })];
                    case 36:
                        cancellation = _f.sent();
                        return [3 /*break*/, 38];
                    case 37:
                        err_10 = _f.sent();
                        throw new Error("Creating campaign has failed: " + err_10.toString());
                    case 38:
                        sendDate = new Date();
                        sendDate.setMinutes(new Date().getMinutes() + 5);
                        _f.label = 39;
                    case 39:
                        _f.trys.push([39, 41, , 42]);
                        return [4 /*yield*/, this.mailchimpDao.performCampaignAction(cancellation.id, 'schedule', {
                                schedule_time: sendDate
                            })];
                    case 40:
                        _f.sent();
                        return [3 /*break*/, 42];
                    case 41:
                        err_11 = _f.sent();
                        if (err_11.status !== BAD_REQUEST_STATUS) {
                            throw new Error("Performing campaign has failed: " + err_11.toString());
                        }
                        return [3 /*break*/, 42];
                    case 42:
                        _b++;
                        return [3 /*break*/, 3];
                    case 43:
                        _i++;
                        return [3 /*break*/, 2];
                    case 44: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * think about some clever data handlers
     * @returns {Promise<any>}
     */
    BokunDAO.prototype.getProductList = function (accessHeaderCreator) {
        if (accessHeaderCreator === void 0) { accessHeaderCreator = new BokunAccessHeaderCreator(); }
        return new Promise(function (resolve, reject) {
            var axiosHttpOptions = {
                method: 'GET',
                url: '/product-list.json/list'
            };
            axiosHttpOptions.headers = __assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1["default"](axiosHttpOptions)
                .then(function (res) { return resolve(res.data); })["catch"](function (err) { return reject(err); });
        });
    };
    BokunDAO.prototype.getProductsFromListBySlug = function (listSlug, accessHeaderCreator) {
        if (accessHeaderCreator === void 0) { accessHeaderCreator = new BokunAccessHeaderCreator(); }
        return new Promise(function (resolve, reject) {
            var axiosHttpOptions = {
                method: 'GET',
                url: "/product-list.json/slug/" + listSlug
            };
            axiosHttpOptions.headers = __assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1["default"](axiosHttpOptions)
                .then(function (res) { return resolve(res.data); })["catch"](function (err) { return reject(err); });
        });
    };
    BokunDAO.prototype.getProductsFromListById = function (listId, accessHeaderCreator) {
        if (accessHeaderCreator === void 0) { accessHeaderCreator = new BokunAccessHeaderCreator(); }
        return new Promise(function (resolve, reject) {
            var axiosHttpOptions = {
                method: 'GET',
                url: "/product-list.json/" + listId
            };
            axiosHttpOptions.headers = __assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1["default"](axiosHttpOptions)
                .then(function (res) { return resolve(res.data); })["catch"](function (err) { return reject(err); });
        });
    };
    BokunDAO.prototype.getAccomodationById = function (accommodationId, accessHeaderCreator) {
        if (accessHeaderCreator === void 0) { accessHeaderCreator = new BokunAccessHeaderCreator(); }
        return new Promise(function (resolve, reject) {
            var axiosHttpOptions = {
                method: 'GET',
                url: "/accommodation.json/" + accommodationId,
                params: {
                    lang: 'EN'
                }
            };
            axiosHttpOptions.headers = __assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            axios_1["default"](axiosHttpOptions)
                .then(function (res) { return resolve(res); })["catch"](function (err) { return reject(err); });
        });
    };
    BokunDAO.prototype.queryBookings = function (buildQuery, accommodationId, accessHeaderCreator) {
        if (accessHeaderCreator === void 0) { accessHeaderCreator = new BokunAccessHeaderCreator(); }
        return new Promise(function (resolve, reject) {
            var axiosHttpOptions = {
                method: 'POST',
                url: '/booking.json/product-booking-search',
                data: {
                    pageSize: 1
                }
            };
            axiosHttpOptions.headers = __assign({}, (axiosHttpOptions.headers || {}), accessHeaderCreator.create(axiosHttpOptions.method, axiosHttpOptions.url));
            var fromDate = new Date();
            fromDate.setHours(new Date().getHours() - 1);
            var creationDateRange = {
                from: moment.tz(fromDate, 'Atlantic/Reykjavik'),
                includeLower: true,
                includeUpper: true,
                to: moment.tz(new Date(), 'Atlantic/Reykjavik')
            };
            axios_1["default"](axiosHttpOptions)
                .then(function (res) {
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
                axios_1["default"](axiosHttpOptions)
                    .then(function (resp) { return resolve(resp.data); })["catch"](function (err) { return reject(err.response.data); });
            })["catch"](function (err) { return reject(err); });
        });
    };
    BokunDAO.prototype.getProductsWithBookings = function () {
        var productList = this.getProductList();
        var bookings = [];
        for (var key in productList) {
            if (productList[key]) {
                var productByKey = productList[key];
                var products = this.getProductsFromListById(productByKey.id);
                products = products['items'];
                for (var index in products) {
                    if (products[index]) {
                        var product = products[index];
                        var item = product[product['productCategory'].toLowerCase()];
                        var booking = this.queryBookings(true, item.id);
                        bookings.push({
                            bookings: booking['results'],
                            location: item['location']
                        });
                    }
                }
            }
        }
        return bookings;
    };
    return BokunDAO;
}());
exports.BokunDAO = BokunDAO;
