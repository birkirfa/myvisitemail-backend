import * as Express from 'express';
import { DbConfig } from './config/db';
import * as MongoClient from 'mongoose';
import { RoutesManager } from './src/routes/routes';
import * as cors from "cors";
import { WhiteList } from './src/routes/whiteList';

const bodyParser = require('body-parser');
const port: number = 8000;
const app: Express.Application = Express();
const db: DbConfig = new DbConfig();
const router: Express.Router = Express.Router();
const whiteList = new WhiteList();

const options: cors.CorsOptions = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token"
    ],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    credentials: true
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

MongoClient.connect(db.mongoUrl, {useMongoClient: true}, function (err, res) {
    app.listen(port, () => {
        console.log(`Mongo db connected and were flying on port: ${port}!`);
    });
});

const routes = new RoutesManager(app, router);

app.get('/', (req, res) => {
    if (MongoClient.connections[0]._readyState === 1) {
        res.status(200).send('Connected to: ' + MongoClient.connections[0].host);
    } else {
        res.status(500).send('MongoDB is DOWN');
    }
});

app.all('/*', cors(options), (req, res, next) => {
    if (req.headers['origin'] && whiteList.isAllowed(req.headers['origin'])) {
        next ();
    } else {
        res.status(401).send('Authorization failure');
    }
});

routes.registerAll();