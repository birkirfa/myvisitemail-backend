class Contact {
    private _from_name: string;
    private _from_email: string;
    private _subject: string;
    private _language: string;

    constructor() {
        this._from_name = '';
        this._from_email = '';
        this._subject = '';
        this._language = '';
    }

    public get from_name(): string {
        return this._from_name;
    }

    public set from_name(value: string) {
        this._from_name = value;
    }

    public get from_email(): string {
        return this._from_email;
    }

    public set from_email(value: string) {
        this._from_email = value;
    }

    public get subject(): string {
        return this._subject;
    }

    public set subject(value: string) {
        this._subject = value;
    }

    public get language(): string {
        return this._language;
    }

    public set language(value: string) {
        this._language = value;
    }
}

export class MailingList {
    private _id: string;
    private _name: string;
    private _campaign_defaults: Contact;

    constructor() {
        this._id = '';
        this._name = '';
        this._campaign_defaults = new Contact();
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get campaign_defaults(): Contact {
        return this._campaign_defaults;
    }

    public set campaign_defaults(value: Contact) {
        this._campaign_defaults = value;
    }
}