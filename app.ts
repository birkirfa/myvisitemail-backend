import * as Express from 'express';
import { DbConfig } from './config/db';
import * as MongoClient from 'mongoose';
import { RoutesManager } from './src/routes/routes';

const bodyParser = require('body-parser');
const port: number = 8000;
const app: Express.Application = Express();
const db: DbConfig = new DbConfig();
const router: Express.Router = Express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    //basic CORS setup, allowing all origins
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin, Access-Control-Allow-Origin");
    
    next();
})

MongoClient.connect(db.mongoUrl, {useMongoClient: true}, function (err, res) {
    app.listen(port, () => {
        console.log(`Mongo db connected and were flying on port: ${port}!`);
    });
});

const routes = new RoutesManager(app, router);
routes.registerAll();

app.get('/', (req, res) => {
    if (MongoClient.connections[0]._readyState === 1) {
        res.status(200).send('Connected to: ' + MongoClient.connections[0].host);
    } else {
        res.status(500).send('MongoDB is DOWN');
    }
});