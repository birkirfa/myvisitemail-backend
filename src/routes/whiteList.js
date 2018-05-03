"use strict";
exports.__esModule = true;
var WhiteList = /** @class */ (function () {
    function WhiteList() {
        this.originList = [
            'http://194.181.46.30',
            'https://myvisitemail.herokuapp.com/'
        ];
    }
    WhiteList.prototype.isAllowed = function (origin) {
        for (var key in this.originList) {
            if (origin === this.originList[key]) {
                return true;
            }
        }
        return false;
    };
    return WhiteList;
}());
exports.WhiteList = WhiteList;
