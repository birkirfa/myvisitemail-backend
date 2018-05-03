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
var resort_customer_dao_1 = require("../database/resort-customers/resort-customer.dao");
var removed_customer_dao_1 = require("../database/resort-customers/removed-customer.dao");
var files_dao_1 = require("../database/files/files.dao");
var ResortCustomersRoute = /** @class */ (function () {
    function ResortCustomersRoute() {
        var _this = this;
        this.jsonParser = bodyParser.json();
        this.dao = new resort_customer_dao_1.CustomerDao();
        this.router = Express.Router();
        this.removedDao = new removed_customer_dao_1.RemovedCustomerDao();
        this.router.get('/all', function (req, res) {
            _this.dao.getAll()
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/removed', function (req, res) {
            var result;
            try {
                result = _this.removedDao.filterList();
            }
            catch (err) {
                console.error(err);
                res.status(500).send('Something went wrong');
                return;
            }
            res.status(200).json(result);
        });
        this.router.get('/detail', function (req, res) {
            res.status(400).send('Resort id missing!');
        });
        this.router.get('/detail/:resortId', function (req, res) {
            var resortId = req.params.resortId;
            _this.dao.getCustomerById(resortId)
                .then(function (customer) {
                if (customer.backgroundId) {
                    var fileDao = new files_dao_1.FileDao();
                    fileDao.getFile(customer.backgroundId)
                        .then(function (file) {
                        customer.backgroundId = file.file;
                        res.status(200).json(customer);
                    })["catch"](function (error) {
                        console.error(error);
                        res.status(500).send(error);
                    });
                }
                else {
                    res.status(200).json(customer);
                }
            })["catch"](function (error) {
                console.error(error);
                res.status(500).send(error);
            });
        });
        this.router.get('/reports/:email', function (req, res) {
            var email = req.params.email;
            var result;
            try {
                result = _this.dao.getReportsByCustomerEmail(email);
            }
            catch (error) {
                console.error(error);
                res.status(500).send(error);
                return;
            }
            res.status(204);
        });
        this.router.post('/', this.jsonParser, function (req, res) {
            var createData = req.body;
            if (Object.keys(createData).length &&
                createData.contact &&
                createData.contact.email) {
                createData.metadata = {
                    creationDate: new Date().getTime(),
                    updateDate: null
                };
                _this.dao.createWithUniqueCheck(createData, {
                    contact: {
                        email: createData.contact.email
                    }
                })
                    .then(function (response) {
                    res.status(200).json(response);
                })["catch"](function (error) {
                    res.status(500).json({ message: 'Error saving to database' });
                });
            }
            else {
                res.status(400).send('Insufficient data.');
            }
        });
        this.router.put('/', function (req, res) {
            res.status(400).send('Missing userId parameter.');
        });
        this.router.put('/:resortId', this.jsonParser, function (req, res) {
            var id = req.params.resortId;
            var updateData = req.body;
            delete updateData._id;
            if (Object.keys(updateData).length) {
                if (!updateData.metadata) {
                    updateData.metadata = {};
                }
                updateData.metadata.updateDate = new Date().getTime();
                _this.dao.update(id, updateData)
                    .then(function (response) {
                    res.status(200).json(response);
                })["catch"](function (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error saving to database' });
                });
            }
            else {
                res.status(400).send('Insufficient data.');
            }
        });
        this.router["delete"]('/:resortId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var resortId, error_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resortId = req.params.resortId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 10]);
                        return [4 /*yield*/, this.dao.removeComplete(resortId)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 3:
                        error_1 = _a.sent();
                        if (!(error_1.status === 404)) return [3 /*break*/, 8];
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.dao.remove(resortId)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        console.error(error_1);
                        res.status(500).send('Error writing to DB');
                        return [2 /*return*/];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        console.error(error_1);
                        res.status(500).send('Error writing to DB');
                        return [2 /*return*/];
                    case 9: return [3 /*break*/, 10];
                    case 10:
                        try {
                            this.removedDao.filterList();
                        }
                        catch (error) {
                            console.error(error);
                            res.status(500).send('Error clearing removal list');
                            return [2 /*return*/];
                        }
                        try {
                            this.removedDao.create({
                                removedDate: new Date().getTime()
                            });
                        }
                        catch (error) {
                            console.error(error);
                            res.status(500).send('Error adding removal info');
                            return [2 /*return*/];
                        }
                        res.status(200).send('OK!');
                        return [2 /*return*/];
                }
            });
        }); });
    }
    return ResortCustomersRoute;
}());
exports.ResortCustomersRoute = ResortCustomersRoute;
