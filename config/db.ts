export class DbConfig {
    mongoUrl: string;
    constructor() {
        this.mongoUrl = 'mongodb://admin:FerdavefirDev@myvisitemail-shard-00-00-kylke.mongodb.net:27017,' +
                        'myvisitemail-shard-00-01-kylke.mongodb.net:27017,' +
                        'myvisitemail-shard-00-02-kylke.mongodb.net:27017/' +
                        'test?ssl=true&replicaSet=myVisitEmail-shard-0&authSource=admin';
    }
}