export interface IResortCustomer {
    id: string;
    name: string;
    position: string;
    email: string;
    rooms: number;
    lastSent: string;
    invoice: string;
}

export interface IResortCustomerDetails extends IResortCustomer {
    id: string;
    name: string;
    position: string;
    email: string;
    rooms: number;
    lastSent: string;
    invoice: string;

    phone: string;
    emailsSent: number;
    emailsOpened: number;
    bounceRate: number;
    cancellations: number;
    lastWeek: number;
    
    profileBkg: string;
}
