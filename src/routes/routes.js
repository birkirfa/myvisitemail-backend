"use strict";
exports.__esModule = true;
var user_route_1 = require("./user.route");
var files_route_1 = require("./files.route");
var mailchimp_route_1 = require("./mailchimp.route");
var resort_customers_route_1 = require("./resort-customers.route");
var bokun_route_1 = require("./bokun-route");
var RoutesManager = /** @class */ (function () {
    function RoutesManager(app) {
        this.app = app;
    }
    RoutesManager.prototype.registerAll = function () {
        this.app.use('/file', new files_route_1.FilesRoute().router);
        this.app.use('/user', new user_route_1.UserRoute().router);
        this.app.use('/mailchimp', new mailchimp_route_1.MailchimpRoute().router);
        this.app.use('/resort-customer', new resort_customers_route_1.ResortCustomersRoute().router);
        this.app.use('/bokun', new bokun_route_1.BokunRoute().router);
        // nginx deploy routes only
        this.app.use('/mongo/file', new files_route_1.FilesRoute().router);
        this.app.use('/mongo/user', new user_route_1.UserRoute().router);
        this.app.use('/mongo/mailchimp', new mailchimp_route_1.MailchimpRoute().router);
        this.app.use('/mongo/resort-customer', new resort_customers_route_1.ResortCustomersRoute().router);
        this.app.use('/mongo/bokun', new bokun_route_1.BokunRoute().router);
    };
    return RoutesManager;
}());
exports.RoutesManager = RoutesManager;
