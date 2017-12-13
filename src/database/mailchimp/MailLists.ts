import {MailingList} from "./MailchimpList";

export class MailLists {
    private _lists: Array<MailingList>;
    private _total_items: number;
    private _links: Array<any>;

    constructor() {
        this._lists = new Array<MailingList>();
        this._total_items = 0;
        this._links = [];
    }

    get lists(): Array<MailingList> {
        return this._lists;
    }

    set lists(value: Array<MailingList>) {
        this._lists = value;
    }

    get total_items(): number {
        return this._total_items;
    }

    set total_items(value: number) {
        this._total_items = value;
    }

    get links(): Array<any> {
        return this._links;
    }

    set links(value: Array<any>) {
        this._links = value;
    }
}