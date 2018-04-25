import { AxiosRequestConfig } from 'axios';
import {
    BookingDao, IAccessHeaderCreator, IBookingRecord
} from '../booking.model';

const DEFAULT_ACCESS_KEY = '';
const DEFAULT_SECRET_KEY = '';

export class RoomersAccessHeaderCreator implements IAccessHeaderCreator {
    private accessKey: string;
    private secretKey: string;

    constructor(accessKey: string = DEFAULT_ACCESS_KEY, secretKey: string = DEFAULT_SECRET_KEY) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }

    public create(method: string, path: string): any {
        return {};
    }
}

export class RoomersDao extends BookingDao {
    constructor() {
        super('https://api.roomers.io');
    }

    getBookings(accessHeaderCreator: IAccessHeaderCreator): Promise<Array<IBookingRecord>> {
        const axiosRequestConfig: AxiosRequestConfig = {
            method: 'GET',
            url: '/bookings'
        };

        return this.request(accessHeaderCreator, axiosRequestConfig);
    }
}
