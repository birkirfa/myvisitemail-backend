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
exports.__esModule = true;
var generic_dao_1 = require("../generic.dao");
var removed_customer_model_1 = require("./removed-customer.model");
var RemovedCustomerDao = /** @class */ (function (_super) {
    __extends(RemovedCustomerDao, _super);
    function RemovedCustomerDao() {
        var _this = this;
        var removedCustomer = new removed_customer_model_1.RemovedCustomerModel(false);
        _this = _super.call(this, removedCustomer.getSchema(), 'removed-customers') || this;
        return _this;
    }
    RemovedCustomerDao.prototype.filterList = function () {
        var results = this.getAll();
        var condition = new Date().setDate(new Date().getDate() - 7);
        var returnValues = [];
        for (var key in results) {
            if (results[key]) {
                var deletion = results[key];
                if (deletion.removedDate && deletion.removedDate < condition) {
                    this.remove(deletion[key]._id);
                }
                else {
                    returnValues.push(deletion);
                }
            }
        }
        return returnValues;
    };
    return RemovedCustomerDao;
}(generic_dao_1.GenericDao));
exports.RemovedCustomerDao = RemovedCustomerDao;
