"use strict";
exports.__esModule = true;
var Express = require("express");
var db_1 = require("./config/db");
var MongoClient = require("mongoose");
var cors = require("cors");
var schedule = require("node-schedule");
var whiteList_1 = require("./src/routes/whiteList");
var routes_1 = require("./src/routes/routes");
var bokun_dao_1 = require("./src/database/bokun/bokun.dao");
var mailchimp_dao_1 = require("./src/database/mailchimp/mailchimp.dao");
var bokun_dao_2 = require("./src/database/api/booking/bokun/bokun.dao");
var campagins_service_1 = require("./src/database/campagins/campagins.service");
var resort_customer_dao_1 = require("./src/database/resort-customers/resort-customer.dao");
var campaginsService = new campagins_service_1.CampaginsService(new resort_customer_dao_1.CustomerDao(), new mailchimp_dao_1.MailchimpDao(), new bokun_dao_2.BokunDao());
var bokun = new bokun_dao_1.BokunDAO();
var mailchimp = new mailchimp_dao_1.MailchimpDao('');
var port = 8000;
var app = Express();
var db = new db_1.DbConfig();
var whiteList = new whiteList_1.WhiteList();
var options = {
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
MongoClient.connect(db.mongoUrl, { useMongoClient: true }, function (err) {
    app.listen(port, function () {
        // console.log(`Mongo db connected and were flying on port: ${port}!`);
    });
});
var routes = new routes_1.RoutesManager(app);
app.get('/', function (req, res) {
    if (MongoClient.connection.readyState === 1) {
        res.status(200).send('Connected to MongoDB');
    }
    else {
        res.status(500).send('MongoDB is DOWN');
    }
});
app.all('/*', cors(options), function (req, res, next) {
    next();
    // if (req.headers['origin'] && whiteList.isAllowed(req.headers['origin'])) {
    //     next ();
    // } else {
    //     res.status(401).send('Authorization failure for ' + req.headers.origin);
    // }
});
schedule.scheduleJob('0 * * * *', function () {
    mailchimp.clearCampaigns()
        .then(function () { return bokun.createCampagins(); })["catch"](function (err) {
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
