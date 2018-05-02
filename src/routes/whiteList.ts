export class WhiteList {
    private originList = [
        'http://194.181.46.30',
        'https://myvisitemail.herokuapp.com/'
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
