"use strict";
exports.__esModule = true;
var MongoClient = require("mongoose");
var BaseModel = /** @class */ (function () {
    function BaseModel(schemaObj) {
        this.schema = new MongoClient.Schema(schemaObj);
    }
    BaseModel.prototype.getSchema = function () {
        return this.schema;
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
