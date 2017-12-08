export class WhiteList {
    private originList = [
        'http://localhost:4200',
        'http://194.181.46.30'
    ];

    public isAllowed(origin) {
        for (const key in this.originList) {
            if (origin === this.originList[key]) {
                return true;
            }
        }
        return false;
    }
}
