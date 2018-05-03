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
var user_model_1 = require("./user.model");
var generic_dao_1 = require("../generic.dao");
var files_dao_1 = require("../files/files.dao");
var UserDao = /** @class */ (function (_super) {
    __extends(UserDao, _super);
    function UserDao() {
        var _this = this;
        var user = new user_model_1.UserModel(false);
        _this = _super.call(this, user.getSchema(), 'users') || this;
        return _this;
    }
    UserDao.prototype.login = function (eMail, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.querySingle({ eMail: eMail })
                .then(function (user) {
                if (!user) {
                    reject('Wrong credentials.');
                }
                user.comparePassword(password)
                    .then(function (match) {
                    if (match) {
                        user.password = '';
                        var files = new files_dao_1.FileDao();
                        if (user.avatarId) {
                            files.getFile(user.avatarId)
                                .then(function (file) {
                                user.avatarId = file.file;
                                resolve(user);
                            })["catch"](function (error) {
                                reject(error);
                            });
                        }
                        else {
                            resolve(user);
                        }
                    }
                    else {
                        reject('Wrong credentials.');
                    }
                })["catch"](reject);
            })["catch"](reject);
        });
    };
    return UserDao;
}(generic_dao_1.GenericDao));
exports.UserDao = UserDao;
