"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var axios_1 = require("axios");
var BookingDao = /** @class */ (function () {
    function BookingDao(baseURL) {
        this.baseURL = baseURL;
    }
    BookingDao.prototype.request = function (accessHeaderCreator, axiosRequestConfig) {
        axiosRequestConfig = __assign({ baseURL: this.baseURL }, axiosRequestConfig, { headers: __assign({}, (axiosRequestConfig.headers || {}), accessHeaderCreator.create(axiosRequestConfig.method, axiosRequestConfig.url)) });
        return axios_1["default"](axiosRequestConfig);
    };
    return BookingDao;
}());
exports.BookingDao = BookingDao;
