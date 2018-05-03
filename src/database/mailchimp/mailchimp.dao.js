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
var Mailchimp = require("mailchimp-api-v3");
var moment = require("moment-timezone");
var MailchimpDao = /** @class */ (function () {
    function MailchimpDao(apiKey) {
        this.mailchimpApiKey = '18840b9db28b4010714c424e4202d0ed-us17';
        this.mailchimp = new Mailchimp(apiKey || this.mailchimpApiKey);
    }
    MailchimpDao.prototype.isComplete = function (campaign) {
        if (campaign.settings
            && campaign.settings.title
            && campaign.settings.template_id
            && campaign.settings.from_name
            && campaign.settings.reply_to
            && campaign.settings.subject_line) {
            return true;
        }
        return false;
    };
    MailchimpDao.prototype.getLists = function () {
        return this.mailchimp.get('/lists?email=birkir@ysland.is');
    };
    MailchimpDao.prototype.getListsByEmail = function (email) {
        return this.mailchimp.get("/lists?email=" + email);
    };
    MailchimpDao.prototype.getListById = function (listId) {
        return this.mailchimp.get("/lists/" + listId);
    };
    MailchimpDao.prototype.getTotalCampaignCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mailchimp.get('/campaigns')];
                    case 1:
                        total = _a.sent();
                        return [2 /*return*/, total['total_items']];
                }
            });
        });
    };
    MailchimpDao.prototype.getCampaigns = function () {
        return __awaiter(this, void 0, void 0, function () {
            var total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTotalCampaignCount()];
                    case 1:
                        total = _a.sent();
                        return [2 /*return*/, this.mailchimp.get("/campaigns?count=" + total)];
                }
            });
        });
    };
    MailchimpDao.prototype.queryCampaignsByDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var time, total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        time = moment.tz(date, 'Atlantic/Reykjavik').toISOString();
                        return [4 /*yield*/, this.getTotalCampaignCount()];
                    case 1:
                        total = _a.sent();
                        return [2 /*return*/, this.mailchimp.get("/campaigns?count=" + total + "&since_send_time=" + time)];
                }
            });
        });
    };
    MailchimpDao.prototype.getCampaignsForBooking = function (bookingCreationDate) {
        return __awaiter(this, void 0, void 0, function () {
            var fromDate, data, regExp, campaignArray, i, campaign;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromDate = new Date();
                        fromDate.setHours(new Date().getHours() - 1);
                        return [4 /*yield*/, this.queryCampaignsByDate(fromDate)];
                    case 1:
                        data = _a.sent();
                        regExp = new RegExp(bookingCreationDate);
                        campaignArray = [];
                        for (i in data['campaigns']) {
                            campaign = data['campaigns'][i];
                            if (campaign.settings && regExp.test(campaign.settings.title)) {
                                campaignArray.push(campaign);
                            }
                        }
                        return [2 /*return*/, campaignArray];
                }
            });
        });
    };
    MailchimpDao.prototype.getAutomations = function () {
        return this.mailchimp.get('/automations');
    };
    MailchimpDao.prototype.createList = function (listObject) {
        return this.mailchimp.post('/lists', listObject);
    };
    MailchimpDao.prototype.updateList = function (listId, listObject) {
        return this.mailchimp.patch("/lists/" + listId, listObject);
    };
    MailchimpDao.prototype.addMemberList = function (customer, contact) {
        return __awaiter(this, void 0, void 0, function () {
            var listData, listObj, campaignList, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getListsByEmail(customer.email)];
                    case 1:
                        listData = _a.sent();
                        if (listData.lists.length > 0) {
                            return [2 /*return*/, listData.lists[0]];
                        }
                        listObj = {
                            'name': customer.email + '_subscribedTo_' + contact.name,
                            'contact': {
                                'company': customer.firstName + '_' + customer.lastName,
                                'address1': contact.address,
                                'address2': '',
                                'city': '',
                                'state': '',
                                'zip': '',
                                'country': '',
                                'phone': ''
                            },
                            'permission_reminder': 'Mailchimp generated',
                            'campaign_defaults': {
                                'from_name': contact.name,
                                'from_email': contact.email,
                                'subject': '',
                                'language': 'en'
                            },
                            'email_type_option': true
                        };
                        return [4 /*yield*/, this.createList(listObj)];
                    case 2:
                        campaignList = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.mailchimp.post("/lists/" + campaignList.id + "/members", {
                                'email_address': customer.email,
                                'status': 'subscribed'
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 6: return [2 /*return*/, campaignList];
                }
            });
        });
    };
    /**
     *
     * @param {Object} campaign:
     * exampleCampaing: {
         recipients: {
            list_id: '8d998c5b10'
        },
         type: 'regular',
         settings: {
            title: 'Mailchimp api test',                        mandatory
            template_id: 1309,                                  mandatory
            from_name: 'Jacek',                                 mandatory
            reply_to: 'jacek.bednarczyk.softiti@gmail.com',     mandatory
            subject_line: 'Mailchimp api test'                  mandatory
        }
    }
     */
    MailchimpDao.prototype.createCampaign = function (campaign) {
        return this.mailchimp.post('/campaigns', campaign);
    };
    MailchimpDao.prototype.updateCampaign = function (campaignUpdate, campaignId) {
        return this.mailchimp.patch("/campaigns/" + campaignId, campaignUpdate);
    };
    /**
     * @param {string} campaignId
     * @param {string} action Available values:
     *                      + cancel-send
     *                      + pause
     *                      + replicate
     *                      + resume
     *                      + schedule
     *                      + send
     *                      + test
     *                      + unschedule
     */
    MailchimpDao.prototype.performCampaignAction = function (campaignId, action, options) {
        var scheduleDate;
        if (action === 'schedule') {
            try {
                scheduleDate = new Date(options['schedule_time']);
                this.setScheduleMinutes(scheduleDate);
                options['schedule_time'] = scheduleDate;
            }
            catch (error) {
                console.error(error);
                throw (error);
            }
        }
        return this.mailchimp.post("/campaigns/" + campaignId + "/actions/" + action, options);
    };
    MailchimpDao.prototype.setScheduleMinutes = function (date) {
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var toCheck = minutes % 15;
        if (toCheck % 15 !== 0) {
            var setMinutes = minutes + 15 - toCheck;
            if (minutes === 60) {
                minutes = 0;
                hours++;
                date.setHours(hours);
            }
            date.setMinutes((minutes + 15 - toCheck));
        }
    };
    /**
     * {'schedule_time':'2017-02-04T19:13:00+00:00','timewarp':'false','batch_delay':'false'}
     * @param {Object} campaignObject
     * @param {Date} date
     */
    MailchimpDao.prototype.createAndScheduleCampaign = function (campaignObject, date) {
        var _this = this;
        this.setScheduleMinutes(date);
        return new Promise(function (resolve, reject) {
            _this.createCampaign(campaignObject)
                .then(function (createdCampaign) {
                _this.performCampaignAction(createdCampaign.id, 'schedule', {
                    schedule_time: date
                })
                    .then(resolve)["catch"](reject);
            });
        });
    };
    MailchimpDao.prototype.clearCampaigns = function () {
        return __awaiter(this, void 0, void 0, function () {
            var condition, campaigns, removePromises, i, campaign, check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        condition = new Date().getDate();
                        return [4 /*yield*/, this.getCampaigns()];
                    case 1:
                        campaigns = (_a.sent()).campaigns;
                        removePromises = [];
                        if (campaigns && campaigns.length) {
                            for (i in campaigns) {
                                campaign = campaigns[i];
                                check = new Date(campaign.send_time).getDate();
                                if (condition - check > 365) {
                                    removePromises.push(this.deleteCompleteCampaign(campaign));
                                }
                            }
                        }
                        return [4 /*yield*/, Promise.all(removePromises)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MailchimpDao.prototype.deleteCampaign = function (campaignId) {
        return this.mailchimp["delete"]("/campaigns/" + campaignId);
    };
    MailchimpDao.prototype.deleteCompleteCampaign = function (campaignObj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteCampaign(campaignObj.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.mailchimp["delete"]("/lists/" + campaignObj.recipients.list_id)];
                }
            });
        });
    };
    MailchimpDao.prototype.getReports = function () {
        return this.mailchimp.get('/reports');
    };
    MailchimpDao.prototype.getReportsFor = function (campaignId) {
        return this.mailchimp.get("/reports/" + campaignId);
    };
    MailchimpDao.prototype.getTemplateById = function (templateId) {
        return this.mailchimp.get("/templates/" + templateId);
    };
    MailchimpDao.prototype.getTemplateContentById = function (templateId) {
        return this.mailchimp.get('/file-manager/files'); // /templates/' + templateId + '/default-content'
    };
    MailchimpDao.prototype.createTemplate = function (templateData) {
        return this.mailchimp.post('/templates', templateData);
    };
    MailchimpDao.prototype.updateTemplate = function (templateId, templateData) {
        return this.mailchimp.patch("/templates/" + templateId, templateData);
    };
    MailchimpDao.prototype.removeTemplate = function (templateId) {
        return this.mailchimp["delete"]("/templates/" + templateId);
    };
    MailchimpDao.prototype.getFolders = function () {
        return this.mailchimp.get('/template-folders/');
    };
    MailchimpDao.prototype.getFolderById = function (id) {
        return this.mailchimp.get("/template-folders/" + id);
    };
    MailchimpDao.prototype.createFolder = function (folderName) {
        return this.mailchimp.post('/template-folders', { name: folderName });
    };
    MailchimpDao.prototype.removeFolder = function (folderId) {
        return this.mailchimp["delete"]("/template-folders/" + folderId);
    };
    MailchimpDao.prototype.removeList = function (listId) {
        return this.mailchimp["delete"]("/lists/" + listId);
    };
    MailchimpDao.prototype.createAndTestCampaign = function (templateData, emails) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.updateTemplate(templateData.templateId, templateData.data.template)
                .then(function () {
                _this.createCampaign({
                    type: 'regular',
                    settings: {
                        title: 'Test campaign',
                        template_id: Number.parseInt(templateData.templateId),
                        from_name: 'Test sender',
                        reply_to: 'mveDevs@gmail.com',
                        subject_line: templateData.data.subject || 'Test campaign'
                    }
                })
                    .then(function (result) {
                    _this.performCampaignAction(result.id, 'test', {
                        test_emails: emails,
                        send_type: 'html'
                    }).then(function (res) {
                        resolve('Test email has been sent.');
                    })["catch"](function (err) {
                        if (/This campaign cannot be tested:/.test(err.detail)) {
                            _this.deleteCampaign(result.id)
                                .then(function () { return resolve(err.detail); })["catch"](function (error) { return reject(error); });
                        }
                        else {
                            reject(err);
                        }
                    });
                })["catch"](function (err) { return reject(err); });
            })["catch"](function (err) { return reject(err); });
        });
    };
    MailchimpDao.prototype.clearTestCampaignsByTemplateUsed = function (tempId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, promises, key, campaign;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCampaigns()];
                    case 1:
                        data = _a.sent();
                        promises = [];
                        if (data.campaigns) {
                            for (key in data.campaigns) {
                                campaign = data.campaigns[key];
                                if (campaign.settings &&
                                    campaign.settings.template_id === tempId &&
                                    campaign.settings.title === 'Test campaign') {
                                    promises.push(this.deleteCampaign(campaign.id));
                                }
                            }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MailchimpDao;
}());
exports.MailchimpDao = MailchimpDao;
