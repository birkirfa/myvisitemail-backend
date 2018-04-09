export class MailTemplate {
    private _id: number;
    private _name: string;
    private _folder_id: string;
    private _html: string;
    private _folder_name: string;

    constructor() {
        this._name = '';
        this._folder_id = '';
        this._html = '';
    }

    public toJSON() {
        return {
            name: this._name,
            folder_id: this.folder_id,
            html: this._html
        }
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get folder_id(): string {
        return this._folder_id;
    }

    public set folder_id(value: string) {
        this._folder_id = value;
    }

    public get html(): string {
        return this._html;
    }

    public set html(value: string) {
        this._html = value;
    }
}