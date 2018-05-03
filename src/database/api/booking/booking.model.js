"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class BookingDao {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    request(accessHeaderCreator, axiosRequestConfig) {
        axiosRequestConfig = Object.assign({ baseURL: this.baseURL }, axiosRequestConfig, { headers: Object.assign({}, (axiosRequestConfig.headers || {}), accessHeaderCreator.create(axiosRequestConfig.method, axiosRequestConfig.url)) });
        return axios_1.default(axiosRequestConfig);
    }
}
exports.BookingDao = BookingDao;
//# sourceMappingURL=booking.model.js.map