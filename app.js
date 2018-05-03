"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.PWD = process.cwd()
const Express = require("express");
const db_1 = require("./config/db");
const MongoClient = require("mongoose");
const cors = require("cors");
const schedule = require("node-schedule");
const whiteList_1 = require("./src/routes/whiteList");
const routes_1 = require("./src/routes/routes");
const bokun_dao_1 = require("./src/database/bokun/bokun.dao");
const mailchimp_dao_1 = require("./src/database/mailchimp/mailchimp.dao");
const bokun_dao_2 = require("./src/database/api/booking/bokun/bokun.dao");
const campagins_service_1 = require("./src/database/campagins/campagins.service");
const resort_customer_dao_1 = require("./src/database/resort-customers/resort-customer.dao");
const campaginsService = new campagins_service_1.CampaginsService(new resort_customer_dao_1.CustomerDao(), new mailchimp_dao_1.MailchimpDao(), new bokun_dao_2.BokunDao());
const bokun = new bokun_dao_1.BokunDAO();
const mailchimp = new mailchimp_dao_1.MailchimpDao('');
const port = process.env.PORT;
const app = Express();
const db = new db_1.DbConfig();
const whiteList = new whiteList_1.WhiteList();
const options = {
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
app.use(Express.static(process.env.PWD + '/public'));
MongoClient.connect(db.mongoUrl, { useMongoClient: true }, (err) => {
    app.listen(port, () => {
        // console.log(`Mongo db connected and were flying on port: ${port}!`);
    });
});
const routes = new routes_1.RoutesManager(app);
app.get('/', (req, res) => {
    if (MongoClient.connection.readyState === 1) {
        res.sendFile(__dirname + '/public/index.html')
    }
    else {
        res.status(500).send('MongoDB is DOWN');
    }
});
app.all('/*', cors(options), (req, res, next) => {
    next();
    // if (req.headers['origin'] && whiteList.isAllowed(req.headers['origin'])) {
    //     next ();
    // } else {
    //     res.status(401).send('Authorization failure for ' + req.headers.origin);
    // }
});
schedule.scheduleJob('0 * * * *', () => {
    mailchimp.clearCampaigns()
        .then(() => bokun.createCampagins())
        .catch((err) => {
        console.error(err);
    });
});
/*mailchimp.clearCampaigns()
    .then(() => bokun.createCampagins())
    .catch((err) => {
        console.error(err);
    });*/
// mailchimp.clearCampaigns()
//     .then(() => campaginsService.createCampagins())
//     .then(() => {
//         console.log('done');
//     })
//     .catch((err) => {
//         console.error(err);
//     });
routes.registerAll();
//# sourceMappingURL=app.js.map