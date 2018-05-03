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
var Express = require("express");
var bodyParser = require("body-parser");
var mailchimp_dao_1 = require("../database/mailchimp/mailchimp.dao");
var MailchimpRoute = /** @class */ (function () {
    function MailchimpRoute() {
        var _this = this;
        this.jsonParser = bodyParser.json();
        this.dao = new mailchimp_dao_1.MailchimpDao('');
        this.router = Express.Router();
        this.router.get('/list', function (req, res) {
            _this.dao.getLists()
                .then(function (result) {
                res.status(200).json(result.lists);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/list/:id', function (req, res) {
            _this.dao.getListById(req.params.id)
                .then(function (list) {
                res.status(200).json(list);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/report', function (req, res) {
            _this.dao.getReports()
                .then(function (result) {
                res.status(200).json(result.reports);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/report/:campaignId', function (req, res) {
            var campaignId = req.params.campaignId;
            _this.dao.getReportsFor(campaignId)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                if (error.status) {
                    return res.status(error.status).send(error);
                }
                else {
                    res.status(500).send(error);
                }
            });
        });
        this.router.get('/campaign', function (req, res) {
            _this.dao.getCampaigns()
                .then(function (result) {
                res.status(200).json(result.campaigns);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/automations', function (req, res) {
            _this.dao.getAutomations()
                .then(function (list) {
                res.status(200).json(list);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.put('/template/:templateId', this.jsonParser, function (req, res) {
            _this.dao.updateTemplate(req.params.templateId, req.body)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                console.log(error);
                res.status(500).send(error);
            });
        });
        this.router.post('/list', this.jsonParser, function (req, res) {
            _this.dao.createList(req.body)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.put('/list/:listId', this.jsonParser, function (req, res) {
            _this.dao.updateList(req.params.listId, req.body)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.post('/campaign', this.jsonParser, function (req, res) {
            var createData = req.body;
            if (Object.keys(createData).length && createData.recipients) {
                console.log('Creating campaign', createData);
                if (_this.dao.isComplete(createData)) {
                    _this.dao.createCampaign(createData)
                        .then(function (result) {
                        res.status(200).json(result);
                    })["catch"](function (error) {
                        res.status(500).send(error);
                    });
                }
                else {
                    res.status(500).send('Campaign is incomplete!');
                }
            }
            else {
                res.status(400).send('Insufficient data.');
            }
        });
        this.router.patch('/campaign/', function (req, res) {
            res.status(400).send('Missing campaignId parameter.');
        });
        this.router.patch('/campaign/:campaignId', this.jsonParser, function (req, res) {
            var createData = req.body;
            if (Object.keys(createData).length) {
                _this.dao.updateCampaign(req.body, req.params.campaignId)
                    .then(function (result) {
                    res.status(200).json(result);
                })["catch"](function (error) {
                    res.status(500).send(error);
                });
            }
            else {
                res.status(400).send('Insufficient data.');
            }
        });
        this.router["delete"]('/campaign/:campaignId', function (req, res) {
            _this.dao.deleteCampaign(req.params.campaignId)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.post('/campaign/:campaignId/:action', function (req, res) {
            var action = req.params.action;
            var campaignId = req.params.campaignId;
            var options = req.body || {};
            try {
                _this.dao.performCampaignAction(campaignId, action, options)
                    .then(function (result) {
                    res.status(200).json(result);
                })["catch"](function (error) {
                    console.error(error);
                    res.status(500).send(error);
                });
            }
            catch (error) {
                res.status(500).send('Attempted to schedule a campaign with no schedule time!');
            }
        });
        this.router.post('/test', this.jsonParser, function (req, res) {
            var testData = req.body;
            _this.dao.createAndTestCampaign(testData.templateData, testData.emails)
                .then(function (resp) {
                res.status(200).json({
                    message: resp
                });
            })["catch"](function (err) {
                console.error(err);
                res.status(500).json(err);
            });
        });
        this.router["delete"]('/test/:templateId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var result, tempId, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tempId = Number.parseInt(req.params.templateId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.dao.clearTestCampaignsByTemplateUsed(tempId)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        res.status(500).json(err_1);
                        return [2 /*return*/];
                    case 4:
                        res.status(200).json(result);
                        return [2 /*return*/];
                }
            });
        }); });
    }
    return MailchimpRoute;
}());
exports.MailchimpRoute = MailchimpRoute;
