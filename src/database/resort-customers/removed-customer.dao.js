"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_dao_1 = require("../generic.dao");
const removed_customer_model_1 = require("./removed-customer.model");
class RemovedCustomerDao extends generic_dao_1.GenericDao {
    constructor() {
        const removedCustomer = new removed_customer_model_1.RemovedCustomerModel(false);
        super(removedCustomer.getSchema(), 'removed-customers');
    }
    filterList() {
        const results = this.getAll();
        const condition = new Date().setDate(new Date().getDate() - 7);
        const returnValues = [];
        for (const key in results) {
            if (results[key]) {
                const deletion = results[key];
                if (deletion.removedDate && deletion.removedDate < condition) {
                    this.remove(deletion[key]._id);
                }
                else {
                    returnValues.push(deletion);
                }
            }
        }
        return returnValues;
    }
}
exports.RemovedCustomerDao = RemovedCustomerDao;
//# sourceMappingURL=removed-customer.dao.js.map