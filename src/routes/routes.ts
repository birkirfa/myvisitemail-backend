import * as Express from 'express';

import { UserRoute } from './user.route';
import { FilesRoute } from './files.route';
import { MailchimpRoute } from './mailchimp.route';
import { ResortCustomersRoute } from './resort-customers.route';

export class RoutesManager {

    constructor(private app: Express.Application) {

    }

    registerAll() {
        this.app.use('/', new UserRoute().router);
        this.app.use('/file', new FilesRoute().router);
        this.app.use('/user', new UserRoute().router);
        this.app.use('/mailchimp', new MailchimpRoute().router);
        this.app.use('/resort-customer', new ResortCustomersRoute().router);
    }
}
