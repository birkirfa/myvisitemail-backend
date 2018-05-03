"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = require("./user.route");
const files_route_1 = require("./files.route");
const mailchimp_route_1 = require("./mailchimp.route");
const resort_customers_route_1 = require("./resort-customers.route");
const bokun_route_1 = require("./bokun-route");
class RoutesManager {
    constructor(app) {
        this.app = app;
    }
    registerAll() {
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
    }
}
exports.RoutesManager = RoutesManager;
//# sourceMappingURL=routes.js.map