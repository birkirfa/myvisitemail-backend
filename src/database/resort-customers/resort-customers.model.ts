// export interface IResortCustomer {
//     id: string;
//     name: string;
//     position: string;
//     email: string;
//     rooms: number;
//     lastSent: string;
//     invoice: string;
// }

// export interface IResortCustomerDetails extends IResortCustomer {
//     id: string;
//     name: string;
//     position: string;
//     email: string;
//     rooms: number;
//     lastSent: string;
//     invoice: string;

//     phone: string;
//     emailsSent: number;
//     emailsOpened: number;
//     bounceRate: number;
//     cancellations: number;
//     lastWeek: number;

//     profileBkg: string;
// }

export interface IResortCustomer {
    id: string;
    company: ICompany;
    contact: ICustomerContact;
    type: string;
    area: string;
    rooms: number;
    lastSent: Date;
    invoice: number;
    reports: any[];
    backgroundId: string;
    metadata: Metadata;
}

export interface ICustomerContact {
    name: string;
    email: string;
    phone: string;
}

export interface ICompany extends ICustomerContact {
    address: string;
}

export class Metadata {
    private _creationDate: number;
    private _updateDate: number;

    constructor() {
        this._creationDate = new Date().getTime();
        this._updateDate = new Date().getTime();
    }

    public get creationDate(): number {
        return this._creationDate;
    }

    public set creationDate(value: number) {
        this._creationDate = value;
    }

    public get updateDate(): number {
        return this._updateDate;
    }

    public set updateDate(value: number) {
        this._updateDate = value;
    }
}
