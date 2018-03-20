import * as Express from 'express';
import { DbConfig } from './config/db';
import * as MongoClient from 'mongoose';
import * as cors from 'cors';
import { WhiteList } from './src/routes/whiteList';
import { RoutesManager } from './src/routes/routes';
import { BokunDAO } from "./src/database/bokun/bokun.dao";
import * as schedule from 'node-schedule';
import {MailchimpDao} from "./src/database/mailchimp/mailchimp.dao";

const bokun = new BokunDAO();
const mailchimp = new MailchimpDao('');
const port = 8000;
const app: Express.Application = Express();
const db: DbConfig = new DbConfig();
const whiteList = new WhiteList();

const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token'
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    credentials: true
};

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

MongoClient.connect(db.mongoUrl, { useMongoClient: true }, (err) => {
    app.listen(port, () => {
        console.log(`Mongo db connected and were flying on port: ${port}!`);
    });
});

const routes = new RoutesManager(app);

app.get('/', (req, res) => {
    if (MongoClient.connection.readyState === 1) {
        res.status(200).send('Connected to MongoDB');
    } else {
        res.status(500).send('MongoDB is DOWN');
    }
});

app.all('/*', cors(options), (req, res, next) => {
    next ();
    // if (req.headers['origin'] && whiteList.isAllowed(req.headers['origin'])) {
    //     next ();
    // } else {
    //     res.status(401).send('Authorization failure for ' + req.headers.origin);
    // }
});

schedule.scheduleJob('0 * * * *', () => {
    mailchimp.clearCampaigns().then(() => {
        bokun.checkAndDoCampaigns();
    });
});
// mailchimp.clearCampaigns().then(() => {
//     bokun.checkAndDoCampaigns();
// });
routes.registerAll();
