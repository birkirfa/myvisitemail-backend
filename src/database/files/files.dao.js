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
var files_model_1 = require("./files.model");
var generic_dao_1 = require("../generic.dao");
var MongoClient = require("mongoose");
var FileDao = /** @class */ (function (_super) {
    __extends(FileDao, _super);
    function FileDao() {
        var _this = this;
        var file = new files_model_1.FileModel(false);
        _this = _super.call(this, file.getSchema(), 'files') || this;
        return _this;
    }
    FileDao.prototype.getAllFiles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAll()
                .then(function (files) {
                if (!files) {
                    reject('Files not founded.');
                }
                else {
                    resolve(files);
                }
            })["catch"](function (error) { return reject(error); });
        });
    };
    FileDao.prototype.getFile = function (fileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.querySingle({ id: fileId })
                .then(function (file) {
                if (!file) {
                    reject('File not found');
                }
                else {
                    resolve(file);
                }
            })["catch"](function (error) { return reject(error); });
        });
    };
    FileDao.prototype.getFilesByType = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.queryAll({ type: type })
                .then(function (file) {
                if (!file) {
                    reject('File not found');
                }
                else {
                    resolve(file);
                }
            })["catch"](function (error) { return reject(error); });
        });
    };
    FileDao.prototype.createFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.create(file)
                .then(function (result) { return resolve(result); })["catch"](function (error) { return reject(error); });
        });
    };
    FileDao.prototype.updateFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof file._id === 'string') {
                file._id = MongoClient.Types.ObjectId(file._id);
            }
            _this.update(file._id, file)
                .then(function (result) { return resolve(result); })["catch"](function (error) { return reject(error); });
        });
    };
    FileDao.prototype.deleteFile = function (fileId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.removeByCustomId(fileId)
                .then(function (result) { return resolve(result); })["catch"](function (error) { return reject(error); });
        });
    };
    return FileDao;
}(generic_dao_1.GenericDao));
exports.FileDao = FileDao;
