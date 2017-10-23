import * as Express from 'express';
import { IRoute } from '../models/routes-models';
import { Db } from 'mongodb';

export class AuthRoutes implements IRoute {
    constructor(private app: Express.Application, private router: Express.Router, private db: Db) {
    }

    register() {
        //register all routes here

        this.app.use('/', this.router);
    }
}