"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../base.model");
class RemovedCustomerModel extends base_model_1.BaseModel {
    constructor(schemaObj) {
        if (!schemaObj) {
            const fullModel = {
                removedDate: {
                    type: Number,
                    required: true
                }
            };
            super(fullModel);
        }
        else {
            super(schemaObj);
        }
    }
}
exports.RemovedCustomerModel = RemovedCustomerModel;
//# sourceMappingURL=removed-customer.model.js.map