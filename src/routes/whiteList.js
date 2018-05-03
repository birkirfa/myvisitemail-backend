"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WhiteList {
    constructor() {
        this.originList = [
            'http://194.181.46.30',
            'https://myvisitemail.herokuapp.com/'
        ];
    }
    isAllowed(origin) {
        for (const key in this.originList) {
            if (origin === this.originList[key]) {
                return true;
            }
        }
        return false;
    }
}
exports.WhiteList = WhiteList;
//# sourceMappingURL=whiteList.js.map