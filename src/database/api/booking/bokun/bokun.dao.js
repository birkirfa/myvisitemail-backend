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
var crypto = require("crypto");
var dateFormat = require("dateformat");
var booking_model_1 = require("../booking.model");
var DEFAULT_ACCESS_KEY = '5ea8219ba5fe4f7c9e7cf905f9a887f1';
var DEFAULT_SECRET_KEY = 'dfd0cf6b86ab49918a9e92031d166fa5';
var BokunAccessHeaderCreator = /** @class */ (function () {
    function BokunAccessHeaderCreator(accessKey, secretKey) {
        if (accessKey === void 0) { accessKey = DEFAULT_ACCESS_KEY; }
        if (secretKey === void 0) { secretKey = DEFAULT_SECRET_KEY; }
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }
    BokunAccessHeaderCreator.prototype.encodeSignature = function (date, method, path) {
        return crypto.createHmac('sha1', this.secretKey)
            .update(date + this.accessKey + method + path).digest('base64');
    };
    BokunAccessHeaderCreator.prototype.create = function (method, path) {
        var date = dateFormat(new Date(), 'yyyy-mm-dd HH:mm:ss');
        var headers = {
            'X-Bokun-Date': date,
            'X-Bokun-AccessKey': this.accessKey,
            'X-Bokun-Signature': this.encodeSignature(date, method, path)
        };
        return headers;
    };
    return BokunAccessHeaderCreator;
}());
exports.BokunAccessHeaderCreator = BokunAccessHeaderCreator;
var BokunDao = /** @class */ (function (_super) {
    __extends(BokunDao, _super);
    function BokunDao() {
        return _super.call(this, 'https://api.bokun.io') || this;
    }
    BokunDao.prototype.getActions = function (customerAPIAccess) {
        var _this = this;
        var accessHeaderCreator = new BokunAccessHeaderCreator(customerAPIAccess.accessKey, customerAPIAccess.secretKey);
        return {
            getBookings: function () { return _this.getBookings(accessHeaderCreator); }
        };
    };
    BokunDao.prototype.getBookings = function (accessHeaderCreator) {
        var _this = this;
        // TODO: improve with 'fields' and 'pageSize: ALL', need to dig deeper in spec
        var axiosRequestConfig = {
            method: 'POST',
            url: '/booking.json/product-booking-search',
            data: {
                pageSize: 1
            }
        };
        return this.request(accessHeaderCreator, axiosRequestConfig)
            .then(function (res) {
            axiosRequestConfig.data = { pageSize: res.data.totalHits };
            return _this.request(accessHeaderCreator, axiosRequestConfig);
        })
            .then(function (res) { return res.data.results.map(function (booking) {
            return {
                id: booking.id,
                creationDate: booking.creationDate && new Date(booking.creationDate),
                startDate: booking.startDate && new Date(booking.startDate),
                endDate: booking.endDate && new Date(booking.endDate),
                customer: {
                    email: booking.customer && booking.customer.email,
                    firstName: booking.customer && booking.customer.firstName,
                    lastName: booking.customer && booking.customer.lastName,
                    address: booking.customer && booking.customer.address
                }
            };
        }); })["catch"](function (err) { return err.response.data; });
    };
    return BokunDao;
}(booking_model_1.BookingDao));
exports.BokunDao = BokunDao;
