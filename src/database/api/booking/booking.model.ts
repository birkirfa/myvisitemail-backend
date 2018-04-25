import axios, { AxiosRequestConfig } from 'axios';

export interface ICustomer {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
}

export interface IBookingRecord {
    id: number;
    creationDate: Date;
    startDate: Date;
    endDate: Date;
    customer: ICustomer;
}

export interface ICustomerAPIAccess {
    accessKey: string;
    secretKey: string;
}

export interface IBookingDaoActions {
    getBookings(): Promise<Array<IBookingRecord>>;
}

export interface IAccessHeaderCreator {
    create(method: string, path: string): any;
}

export abstract class BookingDao {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    request(accessHeaderCreator: IAccessHeaderCreator, axiosRequestConfig: AxiosRequestConfig): Promise<any> {
        axiosRequestConfig = {
            baseURL: this.baseURL,
            ...axiosRequestConfig,
            headers: {
                ...(axiosRequestConfig.headers || {}),
                ...accessHeaderCreator.create(axiosRequestConfig.method, axiosRequestConfig.url)
            }
        };

        return axios(axiosRequestConfig);
    }
}
