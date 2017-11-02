export class WhiteList {
    private originList = [
        'http://localhost:4200'
    ];

    public isAllowed (origin) {
        for (var key in this.originList) {
            if (origin === this.originList[key]) {
                return true;
            }
        }
        return false;
    }
}