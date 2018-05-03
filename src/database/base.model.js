"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoClient = require("mongoose");
class BaseModel {
    constructor(schemaObj) {
        this.schema = new MongoClient.Schema(schemaObj);
    }
    getSchema() {
        return this.schema;
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base.model.js.map