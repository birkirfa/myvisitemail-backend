import * as Express from 'express';
import { UserDao } from '../database/user/userDao';
const dao = new UserDao(null, null);

export class UserRoute {
    router: Express.Router;
    constructor () {
        this.router = Express.Router();
        this.router.get('/', (req, res) => {
            dao.getAll()
                .then((users) => {
                    res.status(200).json(users);
                })
                .catch((error) => {
                    res.status(500).send('Database error.');
                })
        });
    }
}