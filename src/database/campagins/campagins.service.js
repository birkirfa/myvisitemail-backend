"use strict";
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
var RESOURCE_NOT_FOUND_STATUS = 404;
var BAD_REQUEST_STATUS = 400;
var CampaginsService = /** @class */ (function () {
    function CampaginsService(customerDao, mailchimpDao, bokunDao) {
        this.customerDao = customerDao;
        this.mailchimpDao = mailchimpDao;
        this.bokunDao = bokunDao;
    }
    CampaginsService.prototype.createCampagins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customersToBookingsZip, _i, customersToBookingsZip_1, _a, customer, bookings, _b, _c, booking, campaignList, err_1, campaigns, err_2, sendDate, err_3, beforeDate, err_4, afterDate, err_5, has, _d, _e, _f, i, err_6, sendDate, err_7;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, this.prepareDataForCampaigns()];
                    case 1:
                        customersToBookingsZip = _g.sent();
                        _i = 0, customersToBookingsZip_1 = customersToBookingsZip;
                        _g.label = 2;
                    case 2:
                        if (!(_i < customersToBookingsZip_1.length)) return [3 /*break*/, 36];
                        _a = customersToBookingsZip_1[_i], customer = _a.customer, bookings = _a.bookings;
                        _b = 0, _c = bookings.bokun;
                        _g.label = 3;
                    case 3:
                        if (!(_b < _c.length)) return [3 /*break*/, 35];
                        booking = _c[_b];
                        console.log("Creating campaigns for: " + booking.customer.email);
                        if (!booking.customer.email) {
                            return [3 /*break*/, 34];
                        }
                        campaignList = void 0;
                        _g.label = 4;
                    case 4:
                        _g.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.mailchimpDao.addMemberList(booking.customer, customer.contact)];
                    case 5:
                        campaignList = _g.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _g.sent();
                        throw new Error("Creating member list has failed: " + err_1.toString());
                    case 7:
                        campaigns = void 0;
                        _g.label = 8;
                    case 8:
                        _g.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, this.mailchimpDao.getCampaignsForBooking(booking.creationDate)];
                    case 9:
                        campaigns = _g.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        err_2 = _g.sent();
                        throw new Error("Getting campaigns has failed: " + err_2.toString());
                    case 11:
                        if (!(booking.status !== 'CANCELLED')) return [3 /*break*/, 24];
                        if (campaigns.length) {
                            return [3 /*break*/, 34];
                        }
                        if (!customer.booked.toUse) return [3 /*break*/, 15];
                        sendDate = new Date();
                        sendDate.setMinutes(new Date().getMinutes() + 5); // set schedule date to 5 minutes from now
                        _g.label = 12;
                    case 12:
                        _g.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, this.performCampaignAction({
                                title: booking.creationDate + '_booked',
                                template_id: parseInt(customer.booked.templateId),
                                from_name: customer.contact.name,
                                subject_line: (customer.booked.subject ||
                                    'Booking of ' + customer.contact.name + ' produt.'),
                                reply_to: customer.contact.email
                            }, campaignList.id, sendDate)];
                    case 13:
                        _g.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        err_3 = _g.sent();
                        if (err_3.status !== BAD_REQUEST_STATUS) {
                            throw new Error("Performing campaign has failed: " + err_3.toString());
                        }
                        return [3 /*break*/, 15];
                    case 15:
                        if (!customer['check-in'].toUse) return [3 /*break*/, 19];
                        beforeDate = new Date(booking.startDate);
                        beforeDate.setDate(beforeDate.getDate() - 3); // set schedule date to 3 days before check-in
                        if (!(new Date().getTime() < beforeDate.getTime())) return [3 /*break*/, 19];
                        _g.label = 16;
                    case 16:
                        _g.trys.push([16, 18, , 19]);
                        return [4 /*yield*/, this.performCampaignAction({
                                title: booking.creationDate + '_check-in',
                                template_id: parseInt(customer['check-in'].templateId),
                                from_name: customer.contact.name,
                                subject_line: (customer['check-in'].subject ||
                                    'Check-in of ' + customer.contact.name + ' produt.'),
                                reply_to: customer.contact.email
                            }, campaignList.id, beforeDate)];
                    case 17:
                        _g.sent();
                        return [3 /*break*/, 19];
                    case 18:
                        err_4 = _g.sent();
                        throw new Error("Creating and scheduling campaign has failed: " + err_4.toString());
                    case 19:
                        if (!customer['check-out'].toUse) return [3 /*break*/, 23];
                        afterDate = new Date(booking.endDate);
                        afterDate.setDate(afterDate.getDate() + 3); // set schedule date to 3 days after check-out
                        if (!(new Date().getTime() < afterDate.getTime())) return [3 /*break*/, 23];
                        _g.label = 20;
                    case 20:
                        _g.trys.push([20, 22, , 23]);
                        return [4 /*yield*/, this.performCampaignAction({
                                title: booking.creationDate + '_check-out',
                                template_id: parseInt(customer['check-out'].templateId),
                                from_name: customer.contact.name,
                                subject_line: (customer['check-out'].subject ||
                                    'Check-out of ' + customer.contact.name + ' produt.'),
                                reply_to: customer.contact.email
                            }, campaignList.id, afterDate)];
                    case 21:
                        _g.sent();
                        return [3 /*break*/, 23];
                    case 22:
                        err_5 = _g.sent();
                        throw new Error("Creating and scheduling campaign has failed: " + err_5.toString());
                    case 23: return [3 /*break*/, 34];
                    case 24:
                        has = false;
                        _d = [];
                        for (_e in campaigns)
                            _d.push(_e);
                        _f = 0;
                        _g.label = 25;
                    case 25:
                        if (!(_f < _d.length)) return [3 /*break*/, 30];
                        i = _d[_f];
                        if (!/cancellation/.test(campaigns[i].settings.title)) return [3 /*break*/, 26];
                        has = true;
                        return [3 /*break*/, 29];
                    case 26:
                        _g.trys.push([26, 28, , 29]);
                        return [4 /*yield*/, this.mailchimpDao.deleteCampaign(campaigns[i].settings.id)];
                    case 27:
                        _g.sent();
                        return [3 /*break*/, 29];
                    case 28:
                        err_6 = _g.sent();
                        // If campaign is already deleted just continue, throw an error otherwise
                        if (err_6.status !== RESOURCE_NOT_FOUND_STATUS) {
                            throw new Error("Deleting campaign has failed: " + err_6.toString());
                        }
                        return [3 /*break*/, 29];
                    case 29:
                        _f++;
                        return [3 /*break*/, 25];
                    case 30:
                        if (!(!has && customer.cancellation.toUse)) return [3 /*break*/, 34];
                        sendDate = new Date();
                        sendDate.setMinutes(new Date().getMinutes() + 5); // set schedule date to 5 minutes from now
                        _g.label = 31;
                    case 31:
                        _g.trys.push([31, 33, , 34]);
                        return [4 /*yield*/, this.performCampaignAction({
                                title: booking.creationDate + '_cancellation',
                                template_id: parseInt(customer.cancellation.templateId),
                                from_name: customer.contact.name,
                                subject_line: (customer.cancellation.subject ||
                                    'Cancellation of ' + customer.contact.name + ' produt.'),
                                reply_to: customer.contact.email
                            }, campaignList.id, sendDate)];
                    case 32:
                        _g.sent();
                        return [3 /*break*/, 34];
                    case 33:
                        err_7 = _g.sent();
                        if (err_7.status !== BAD_REQUEST_STATUS) {
                            throw new Error("Performing campaign has failed: " + err_7.toString());
                        }
                        return [3 /*break*/, 34];
                    case 34:
                        _b++;
                        return [3 /*break*/, 3];
                    case 35:
                        _i++;
                        return [3 /*break*/, 2];
                    case 36: return [2 /*return*/];
                }
            });
        });
    };
    CampaginsService.prototype.performCampaignAction = function (campaignSettings, campaignListId, sendDate) {
        return this.mailchimpDao.createAndScheduleCampaign({
            recipients: { list_id: campaignListId },
            type: 'regular',
            settings: campaignSettings
        }, sendDate);
    };
    CampaginsService.prototype.prepareDataForCampaigns = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customersToBookingsZip, customers, _i, customers_1, customer, bookings, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        customersToBookingsZip = [];
                        return [4 /*yield*/, this.customerDao.getAll()];
                    case 1:
                        customers = _a.sent();
                        _i = 0, customers_1 = customers;
                        _a.label = 2;
                    case 2:
                        if (!(_i < customers_1.length)) return [3 /*break*/, 5];
                        customer = customers_1[_i];
                        return [4 /*yield*/, this.getBookingsForCustomer(customer)];
                    case 3:
                        bookings = _a.sent();
                        customersToBookingsZip.push({
                            customer: customer,
                            bookings: bookings
                        });
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, customersToBookingsZip];
                    case 6:
                        err_8 = _a.sent();
                        throw new Error("Preparing data for campaigns has failed: " + err_8.toString());
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CampaginsService.prototype.getBookingsForCustomer = function (customer) {
        return __awaiter(this, void 0, void 0, function () {
            var bokunBookings, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bokunBookings = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.bokunDao.getActions(customer.APIAccess.bokun)
                                .getBookings()];
                    case 2:
                        bokunBookings = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_9 = _a.sent();
                        console.error("Getting bookings has failed " + err_9.toString());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, {
                            bokun: bokunBookings
                        }];
                }
            });
        });
    };
    return CampaginsService;
}());
exports.CampaginsService = CampaginsService;
