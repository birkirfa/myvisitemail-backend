"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booking_model_1 = require("../booking.model");
const DEFAULT_ACCESS_KEY = '';
const DEFAULT_SECRET_KEY = '';
class RoomersAccessHeaderCreator {
    constructor(accessKey = DEFAULT_ACCESS_KEY, secretKey = DEFAULT_SECRET_KEY) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }
    create(method, path) {
        return {};
    }
}
exports.RoomersAccessHeaderCreator = RoomersAccessHeaderCreator;
class RoomersDao extends booking_model_1.BookingDao {
    constructor() {
        super('https://api.roomers.io');
    }
    getBookings(accessHeaderCreator) {
        const axiosRequestConfig = {
            method: 'GET',
            url: '/bookings'
        };
        return this.request(accessHeaderCreator, axiosRequestConfig);
    }
}
exports.RoomersDao = RoomersDao;
//# sourceMappingURL=roomers.dao.js.map