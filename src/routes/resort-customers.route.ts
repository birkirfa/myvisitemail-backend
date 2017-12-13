import * as Express from 'express';
import * as bodyParser from 'body-parser';
import { CustomerDao } from '../database/resort-customers/resort-customer.dao';
import { RemovedCustomerDao } from '../database/resort-customers/removed-customer.dao';

export class ResortCustomersRoute {
    router: Express.Router;
    jsonParser = bodyParser.json();
    dao: CustomerDao;
    removedDao: RemovedCustomerDao;

    constructor() {
        this.dao = new CustomerDao();
        this.router = Express.Router();
        this.removedDao = new RemovedCustomerDao();
        this.router.get('/all', (req, res) => {
            let result;
            try {
                result = this.dao.getAll();
            } catch (err) {
                console.error(err);
                res.status(500).send('Something went wrong');
                return;
            }
            res.status(200).json(result);
        });

        this.router.get('/removed', (req, res) => {
            let result;
            try {
                result = this.removedDao.filterList();
            } catch (err) {
                console.error(err);
                res.status(500).send('Something went wrong');
                return;
            }
            res.status(200).json(result);
        });

        this.router.get('/detail', (req, res) => {
            res.status(400).send('Resort id missing!');
        });

        this.router.get('/detail/:resortId', (req, res) => {
            const resortId = req.params.resortId;
            let result;
            try {
                result = this.dao.getCustomerById(resortId);
            } catch (error) {
                console.error(error);
                res.status(500).send(error);
                return;
            }
            res.status(200).json(result);
        });

        this.router.get('/reports/:email', (req, res) => {
            const email = req.params.email;
            let result;
            try {
                result = this.dao.getReportsByCustomerEmail(email);
            } catch (error) {
                console.error(error);
                res.status(500).send(error);
                return;
            }
            res.status(200).json(result);
        });

        this.router.post('/', this.jsonParser, (req, res) => {
            const createData = req.body;
            if (Object.keys(createData).length &&
                createData.company &&
                createData.company.email) {
                createData.metadata = {
                    creationDate: new Date().getTime()
                };
                this.dao.createWithUniqueCheck(
                    createData,
                    {
                        company: {
                            email: createData.company.email
                        }
                    })
                    .then(response => {
                        res.status(200).json(response);
                    })
                    .catch(error => {
                        res.status(500).json(error);
                    });
            } else {
                res.status(400).send('Insufficient data.');
            }
        });

        this.router.put('/', (req, res) => {
            res.status(400).send('Missing userId parameter.');
        });

        this.router.put('/:resortId', this.jsonParser, (req, res) => {
            const id = req.params.resortId;
            const updateData = req.body;
            if (Object.keys(updateData).length) {
                if (!updateData.metadata) {
                    updateData.metadata = {};
                }
                updateData.metadata.updateDate = new Date().getTime();
                this.dao.update(id, updateData)
                    .then(response => {
                        res.status(200).json(response);
                    })
                    .catch(error => {
                        res.status(500).json(error);
                    });
            } else {
                res.status(400).send('Insufficient data.');
            }
        });

        this.router.delete('/:resortId', (req, res) => {
            const resortId = req.params.resortId;
            try {
                this.dao.remove(resortId);
            } catch (error) {
                console.error(error);
                res.status(500).send('Error writing to DB');
                return;
            }
            try {
                this.removedDao.filterList();
            } catch (error) {
                console.error(error);
                res.status(500).send('Error clearing removal list');
                return;
            }
            try {
                this.removedDao.create({
                    removedDate: new Date().getTime()
                });
            } catch (error) {
                console.error(error);
                res.status(500).send('Error adding removal info');
                return;
            }
            res.status(200).send('OK!');
        });
    }
}
