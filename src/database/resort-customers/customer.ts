export class Customer {
    private name: string;
    private position: string;
    private email: string;
    private rooms: number;
    private lastSent: Date;
    private invoice: number;
    private mailingReports: Array<Object>;

    constructor (name, position, email, rooms, mailingReports, invoice) {
        this.name = name;
        this.position = position;
        this.email = email;
        this.rooms = rooms;
        if (mailingReports.length) {
            this.lastSent = new Date(mailingReports[0].send_time);
        }
        this.invoice = invoice;
        this.mailingReports = mailingReports;
    }

    public set customerName(value: string) {
        this.customerName = value;
    }

    public setPosition(value: string) {
        this.position = value;
    }

    public setEmail(value: string) {
        this.email = value;
    }

    public setRooms(value: number) {
        this.rooms = value;
    }

    public setLastSent(value: Date) {
        this.lastSent = value;
    }

    public setInvoice(value: number) {
        this.invoice = value;
    }

    public getCustomerName(): string {
        return this.customerName;
    }

    public getPosition(): string {
        return this.position;
    }

    public getEmail(): string {
        return this.email;
    }

    public getRooms(): number {
        return this.rooms;
    }

    public getLastSent(): Date {
        return this.lastSent;
    }

    public getInvoice(): number {
        return this.invoice;
    }

    public getMailingReports(): Array<Object> {
        return this.mailingReports;
    }
}