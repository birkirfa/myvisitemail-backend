import * as Express from 'express';

import { UserRoute } from './user.route';
import { FilesRoute } from './files.route';
import { MailchimpRoute } from './mailchimp.route';
import { ResortCustomersRoute } from './resort-customers.route';
import { BokunRoute } from './bokun-route';

export class RoutesManager {

    constructor(private app: Express.Application) {

    }

    registerAll() {
        this.app.use('/file', new FilesRoute().router);
        this.app.use('/user', new UserRoute().router);
        this.app.use('/mailchimp', new MailchimpRoute().router);
        this.app.use('/resort-customer', new ResortCustomersRoute().router);
        this.app.use('/bokun', new BokunRoute().router);

        // nginx deploy routes only
        this.app.use('/mongo/file', new FilesRoute().router);
        this.app.use('/mongo/user', new UserRoute().router);
        this.app.use('/mongo/mailchimp', new MailchimpRoute().router);
        this.app.use('/mongo/resort-customer', new ResortCustomersRoute().router);
        this.app.use('/mongo/bokun', new BokunRoute().router);
    }
}
