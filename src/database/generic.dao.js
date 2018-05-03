"use strict";
exports.__esModule = true;
var MongoClient = require("mongoose");
var GenericDao = /** @class */ (function () {
    function GenericDao(schema, modelName) {
        try {
            this.Model = MongoClient.model(modelName);
        }
        catch (error) {
            this.Model = MongoClient.model(modelName, schema);
        }
    }
    GenericDao.prototype.getModel = function () {
        return this.Model;
    };
    GenericDao.prototype.getAll = function () {
        return this.Model.find({}).exec();
    };
    GenericDao.prototype.queryAll = function (queryObj) {
        return this.Model.find(queryObj).exec();
    };
    GenericDao.prototype.querySingle = function (queryObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Model.findOne(queryObj).then(resolve)["catch"](reject);
        });
    };
    GenericDao.prototype.create = function (createData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var obj = new _this.Model(createData);
            obj.save().then(resolve)["catch"](reject);
        });
    };
    GenericDao.prototype.createWithUniqueCheck = function (createData, queryObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.querySingle(queryObj)
                .then(function (response) {
                if (response) {
                    reject('Key duplication detected');
                }
                else {
                    var obj = new _this.Model(createData);
                    obj.save().then(resolve)["catch"](reject);
                }
            })["catch"](reject);
        });
    };
    GenericDao.prototype.update = function (itemId, updateData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.Model.findById(itemId)
                .then(function (item) {
                for (var key in updateData) {
                    if (!item[key] && item[key] !== 0) { // carefull around falsy values
                        reject('Attempted to update a non existeny property.');
                        return;
                    }
                }
                item.set(updateData);
                item.save().then(resolve)["catch"](reject);
            })["catch"](function (err) {
                console.error(err);
                reject(err);
                ;
            });
        });
    };
    GenericDao.prototype.remove = function (itemId) {
        return this.Model.findOneAndRemove({ _id: itemId }).exec();
    };
    GenericDao.prototype.removeByCustomId = function (itemId) {
        return this.Model.findOneAndRemove({ id: itemId }).exec();
    };
    return GenericDao;
}());
exports.GenericDao = GenericDao;
