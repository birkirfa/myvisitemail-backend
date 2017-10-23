import * as Express from 'express';
import { Db } from 'mongodb'

import { IRoute } from '../models/routes-models';
import { AuthRoutes } from './auth-routes';

export class RoutesManager {
    myRoutes: IRoute[];

    constructor(private app: Express.Application, private router:Express.Router, private db: Db){
        //import and init all routes
        this.myRoutes = [
            new AuthRoutes(app, router, db)
        ];
    }

    registerAll(){
        this.myRoutes.forEach(route => {
            route.register();
        })
    }
}