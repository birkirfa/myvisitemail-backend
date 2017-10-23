import * as Express from 'express'
import { DbConfig } from './config/db';
import { MongoClient } from 'mongodb'
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

MongoClient.connect(db.mongoUrl, (error, database) => {
    if (error) { return console.log(error); }

    let routes = new RoutesManager(app, router, database);
    routes.registerAll();

    app.listen(port, () => {
        console.log(`Ready on port ${port}!`);
    })
})