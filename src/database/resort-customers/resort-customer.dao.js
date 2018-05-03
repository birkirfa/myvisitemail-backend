"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var customer_model_1 = require("./customer.model");
var generic_dao_1 = require("../generic.dao");
var mailchimp_dao_1 = require("../mailchimp/mailchimp.dao");
var CustomerDao = /** @class */ (function (_super) {
    __extends(CustomerDao, _super);
    function CustomerDao() {
        var _this = this;
        var customer = new customer_model_1.CustomerModel(false);
        _this = _super.call(this, customer.getSchema(), 'resort-customers') || this;
        _this.mailchimp = new mailchimp_dao_1.MailchimpDao('');
        return _this;
    }
    CustomerDao.prototype.getReportsByListId = function (listId, reports) {
        return reports.filter(function (report) {
            return report.list_id === listId;
        });
    };
    CustomerDao.prototype.getReportsByCustomerEmail = function (eMail) {
        // const mailLists = (this.mailchimp.getLists()).lists;
        // const reports = (this.mailchimp.getReports()).reports;
        // let customerReports = [];
        // for (const key in mailLists) {
        //     if (mailLists[key]) {
        //         const mailList = mailLists[key];
        //         if (mailList.campaign_defaults &&
        //             mailList.campaign_defaults.from_email === eMail) {
        //             customerReports = customerReports.concat(
        //                 this.getReportsByListId(mailList.id, reports)
        //             );
        //         }
        //     }
        // }
        // customerReports.sort((reportA, reportB) => {
        //     return new Date(reportA.send_time).getTime() -
        //         new Date(reportB.send_time).getTime();
        // });
        // return customerReports;
    };
    CustomerDao.prototype.getAll = function () {
        return _super.prototype.getAll.call(this);
    };
    CustomerDao.prototype.getCustomerById = function (customerId) {
        var result;
        try {
            result = this.querySingle({ _id: customerId });
        }
        catch (error) {
            return Promise.reject('Resort not found!');
        }
        return result;
    };
    CustomerDao.prototype.querySingle = function (queryObj) {
        return _super.prototype.querySingle.call(this, queryObj);
    };
    CustomerDao.prototype.removeComplete = function (customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.querySingle({ _id: customerId })];
                    case 1:
                        customer = _a.sent();
                        return [4 /*yield*/, this.mailchimp.removeTemplate(customer.booked.templateId)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.mailchimp.removeTemplate(customer['check-in'].templateId)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.mailchimp.removeTemplate(customer['check-out'].templateId)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.mailchimp.removeTemplate(customer.cancellation.templateId)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.mailchimp.removeFolder(customer.templateFolderId)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, _super.prototype.remove.call(this, customerId)];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerDao.prototype.handleTemplate = function (templateId, templateData) {
        if (templateId) {
            return this.mailchimp.updateTemplate(templateId, templateData);
        }
        else {
            return this.mailchimp.createTemplate(templateData);
        }
    };
    CustomerDao.prototype.update = function (itemId, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var folderId, _a, updateTemplate, templatePromises, templateId, list;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!updateData.templateFolderId) return [3 /*break*/, 1];
                        _a = updateData.templateFolderId;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.mailchimp.createFolder(updateData.contact.name)];
                    case 2:
                        _a = (_b.sent()).id;
                        _b.label = 3;
                    case 3:
                        folderId = _a;
                        updateTemplate = {
                            name: '',
                            html: '',
                            folder_id: folderId
                        };
                        templatePromises = [];
                        if (updateData.booked) {
                            updateTemplate.html = updateData.booked.html;
                            templateId = updateData.booked.templateId;
                        }
                        else {
                            updateTemplate.html = 'New template';
                            templateId = false;
                        }
                        updateTemplate.name = 'bookedTemplate';
                        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
                        if (updateData['check-in']) {
                            updateTemplate.html = updateData['check-in'].html;
                            templateId = updateData['check-in'].templateId;
                        }
                        else {
                            updateTemplate.html = 'New template';
                            templateId = false;
                        }
                        updateTemplate.name = 'beforeTemplate';
                        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
                        if (updateData['check-out']) {
                            updateTemplate.html = updateData['check-out'].html;
                            templateId = updateData['check-out'].templateId;
                        }
                        else {
                            updateTemplate.html = 'New template';
                            templateId = false;
                        }
                        updateTemplate.name = 'afterTemplate';
                        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
                        if (updateData.cancellation) {
                            updateTemplate.html = updateData.cancellation.html;
                            templateId = updateData.cancellation.templateId;
                        }
                        else {
                            updateTemplate.html = 'New template'; //templateId
                            templateId = false;
                        }
                        updateTemplate.name = 'cancelTemplate';
                        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
                        if (!!updateData.listId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.mailchimp.createList({
                                "name": updateData.contact.name,
                                "contact": {
                                    "company": updateData.contact.name,
                                    "address1": updateData.contact.address,
                                    "address2": "",
                                    "city": "",
                                    "state": "",
                                    "zip": "",
                                    "country": "",
                                    "phone": ""
                                },
                                "permission_reminder": "Mailchimp generated",
                                "campaign_defaults": {
                                    "from_name": updateData.contact.name,
                                    "from_email": updateData.contact.email,
                                    "subject": "",
                                    "language": "en"
                                },
                                "email_type_option": true
                            })];
                    case 4:
                        list = _b.sent();
                        _b.label = 5;
                    case 5: return [4 /*yield*/, Promise.all(templatePromises)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, _super.prototype.update.call(this, itemId, updateData)];
                    case 7: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    // check the workings then maybe add a toJSON method
    /**

     * @param {IResortCustomer} createData
     * @param queryObj
     * @returns {Promise<any>}
     */
    CustomerDao.prototype.createWithUniqueCheck = function (createData, queryObj) {
        return __awaiter(this, void 0, void 0, function () {
            var templateData, list, err_1, folder, booked, before, after, cancel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.querySingle(queryObj)];
                    case 1:
                        _a.sent();
                        templateData = {
                            name: '',
                            html: 'New template',
                            folder_id: ''
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.mailchimp.createList({
                                "name": createData.contact.name,
                                "contact": {
                                    "company": createData.contact.name,
                                    "address1": createData.contact.address,
                                    "address2": "",
                                    "city": "",
                                    "state": "",
                                    "zip": "",
                                    "country": "",
                                    "phone": ""
                                },
                                "permission_reminder": "Mailchimp generated",
                                "campaign_defaults": {
                                    "from_name": createData.contact.name,
                                    "from_email": createData.contact.email,
                                    "subject": "",
                                    "language": "en"
                                },
                                "email_type_option": true
                            })];
                    case 3:
                        list = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/];
                    case 5:
                        createData.listId = list.id;
                        return [4 /*yield*/, this.mailchimp.createFolder(createData.contact.name)];
                    case 6:
                        folder = _a.sent();
                        templateData.folder_id = folder.id;
                        templateData.name = 'bookedTemplate';
                        return [4 /*yield*/, this.mailchimp.createTemplate(templateData)];
                    case 7:
                        booked = _a.sent();
                        templateData.name = 'beforeTemplate';
                        return [4 /*yield*/, this.mailchimp.createTemplate(templateData)];
                    case 8:
                        before = _a.sent();
                        templateData.name = 'afterTemplate';
                        return [4 /*yield*/, this.mailchimp.createTemplate(templateData)];
                    case 9:
                        after = _a.sent();
                        templateData.name = 'cancelTemplate';
                        return [4 /*yield*/, this.mailchimp.createTemplate(templateData)];
                    case 10:
                        cancel = _a.sent();
                        createData.templateFolderId = folder.id;
                        createData.booked = {
                            templateId: booked.id,
                            html: templateData.html,
                            toUse: false
                        };
                        createData['check-in'] = {
                            templateId: before.id,
                            html: templateData.html,
                            toUse: false
                        };
                        createData['check-out'] = {
                            templateId: after.id,
                            html: templateData.html,
                            toUse: false
                        };
                        createData.cancellation = {
                            templateId: cancel.id,
                            html: templateData.html,
                            toUse: false
                        };
                        return [4 /*yield*/, _super.prototype.create.call(this, createData)];
                    case 11: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CustomerDao;
}(generic_dao_1.GenericDao));
exports.CustomerDao = CustomerDao;
