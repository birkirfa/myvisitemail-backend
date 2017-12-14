export interface IMailchimpTemplate {
    id: number;
    type: string;
    name: string;
    drag_and_drop: boolean;
    responsive: boolean;
    category: string;
    date_created: string;
    created_by: string;
    active: boolean;
    folder_id: string;
    thumbnail: string;
    share_url: string;
    _links: any[];
}

export interface IMailchimpTemplateFolder {
    name: string;
    id: string;
    count: number;
    _links: any[];
}

export interface IContact {
    from_name: string;
    from_email: string;
    subject: string;
    language: string;
}

export interface IMailingList {
    id: string;
    name: string;
    campaign_defaults: IContact;
}

export interface IMailLists {
    lists: IMailingList[];
    total_items: number;
    links: any[];
}
