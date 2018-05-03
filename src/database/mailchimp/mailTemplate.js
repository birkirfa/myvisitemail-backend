"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailTemplate {
    constructor() {
        this._name = '';
        this._folder_id = '';
        this._html = '';
    }
    toJSON() {
        return {
            name: this._name,
            folder_id: this.folder_id,
            html: this._html
        };
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get folder_id() {
        return this._folder_id;
    }
    set folder_id(value) {
        this._folder_id = value;
    }
    get html() {
        return this._html;
    }
    set html(value) {
        this._html = value;
    }
}
exports.MailTemplate = MailTemplate;
//# sourceMappingURL=mailTemplate.js.map