import * as Express from 'express';
import * as bodyParser from 'body-parser';

export class ResortCustomersRoute {
    router: Express.Router;
    jsonParser = bodyParser.json();

    constructor() {
        this.router = Express.Router();

        this.router.get('/all', (req, res) => {
            res.status(200).json(this.mockResortCustomersList());

            // this.dao.getLists()
            //     .then((result) => {
            //         res.status(200).json(result.lists);
            //     })
            //     .catch((error) => {
            //         res.status(500).send(error);
            //     });
        });
    }

    private mockResortCustomersList() {

    }
}
