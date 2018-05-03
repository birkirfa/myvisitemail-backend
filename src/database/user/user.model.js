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
var base_model_1 = require("../base.model");
var bcrypt = require("bcryptjs");
var SALT_WORK_FACTOR = 10;
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel(schemaObj) {
        var _this = _super.call(this, (schemaObj || {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            isAdmin: {
                type: Boolean,
                required: true
            },
            eMail: {
                type: String,
                required: true
            },
            avatarId: {
                type: String,
                required: true
            }
        })) || this;
        _this.getSchema().pre('save', function (next) {
            console.log('save', _this);
            console.log('save - next', next);
            // const user: IUser = this;
            // // only hash the password if it has been modified (or is new)
            // // if (!user.isModified('password')) { return next(); }
            // // generate a salt
            // bcrypt.genSalt(SALT_WORK_FACTOR)
            //     .then((salt) => {
            //         // hash the password along with our new salt
            //         bcrypt.hash(user.password, salt)
            //             .then((hash) => {
            //                 // override the cleartext password with the hashed one
            //                 user.password = hash;
            //                 next();
            //             })
            //             .catch((err) => {
            //                 next(err);
            //             });
            //     })
            //     .catch((err) => {
            //         next(err);
            //     });
        });
        _this.getSchema().methods.comparePassword = function (candidate) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                bcrypt.compare(candidate, _this.password, function (err, isMatch) {
                    if (err) {
                        reject(err);
                    }
                    resolve(isMatch);
                });
            });
        };
        return _this;
    }
    return UserModel;
}(base_model_1.BaseModel));
exports.UserModel = UserModel;
