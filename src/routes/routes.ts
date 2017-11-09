import * as Express from 'express';

import { UserRoute } from './user-route';
import { FilesRoute } from './files-route';

export class RoutesManager {

    constructor(private app: Express.Application){
    }

    registerAll(){
        this.app.use('/', new UserRoute().router);
        this.app.use('/file', new FilesRoute().router);
    }
}