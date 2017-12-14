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
    metadata: IMetadata;
}

export interface ICustomerContact {
    name: string;
    email: string;
    phone: string;
}

export interface ICompany extends ICustomerContact {
    address: string;
}

export interface IMetadata {
    creationDate: number;
    updateDate: number;
}

export interface IResortCustomerTemplate {
    name: string;
    html: string;
    folderId: string; // folder_id
}
