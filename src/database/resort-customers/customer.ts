class customerContact {
    private _name: string;
    private _email: string;
    private _phone: string;

    constructor () {
        this._name = '';
        this._email = '';
        this._phone = '';
    }

    public get name() {
        return this._name;
    }

    public set name(value) {
        this._name = value;
    }

    public get email() {
        return this._email;
    }

    public set email(value) {
        this._email = value;
    }

    public get phone() {
        return this._phone;
    }

    public set phone(value) {
        this._phone = value;
    }
}

class Company extends customerContact {
    private _address: string;

    constructor() {
        super();
        this._address = '';
    }

    public get address(): string {
        return this._address;
    }

    public set address(value: string) {
        this._address = value;
    }
}

class Metadata {
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

export class ResortCustomer {
    private __id: string;
    private _company: Company;
    private _contact: customerContact;
    private _type: string;
    private _area: string
    private _rooms: number;
    private _lastSent: Date;
    private _invoice: number;
    private _reports: Array<any>;
    private _backgroundId: string;
    private _metadata: Metadata;


    constructor() {
        this.__id = '';
        this._company = new Company();
        this._contact = new customerContact();
        this._type = '';
        this._area = '';
        this._rooms = 0;
        this._lastSent = new Date();
        this._invoice = 0;
        this._reports = [];
        this._metadata = new Metadata();
    }

    public get _id(): string {
        return this._id;
    }

    public set _id(value: string) {
        this._id = value;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(value: Company) {
        this._company = value;
    }

    public get contact(): customerContact {
        return this._contact;
    }

    public set contact(value: customerContact) {
        this._contact = value;
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }

    public get area(): string {
        return this._area;
    }

    public set area(value: string) {
        this._area = value;
    }

    public get rooms(): number {
        return this._rooms;
    }

    public set rooms(value: number) {
        this._rooms = value;
    }

    public get lastSent(): Date {
        return this._lastSent;
    }

    public set lastSent(value: Date) {
        this._lastSent = value;
    }

    public get invoice(): number {
        return this._invoice;
    }

    public set invoice(value: number) {
        this._invoice = value;
    }

    public get reports(): Array<any> {
        return this._reports;
    }

    public set reports(value: Array<any>) {
        this._reports = value;
    }

    public get backgroundId(): string {
        return this._backgroundId;
    }

    public set backgroundId(value: string) {
        this._backgroundId = value;
    }

    public get metadata(): Metadata {
        return this._metadata;
    }

    public set metadata(value: Metadata) {
        this._metadata = value;
    }
}