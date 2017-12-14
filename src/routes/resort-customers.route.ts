import * as Express from 'express';
import * as bodyParser from 'body-parser';
import { CustomerDao } from '../database/resort-customers/resort-customer.dao';
import { RemovedCustomerDao } from '../database/resort-customers/removed-customer.dao';
import { MailchimpDao } from '../database/mailchimp/mailchimp.dao';
import { IResortCustomer, IResortCustomerTemplate } from '../database/resort-customers/resort-customers.model';

export class ResortCustomersRoute {
    router: Express.Router;
    jsonParser = bodyParser.json();
    dao: CustomerDao;
    removedDao: RemovedCustomerDao;
    mailchimpDao: MailchimpDao;

    constructor() {
        this.dao = new CustomerDao();
        this.router = Express.Router();
        this.mailchimpDao = new MailchimpDao();
        this.removedDao = new RemovedCustomerDao();
        this.router.get('/all', (req, res) => {
            this.dao.getAll()
                .then(result => {
                    res.status(200).json(result);
                })
                .catch(error => {
                    res.status(500).send(error);
                });
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
            const createData: IResortCustomer = req.body;
            if (Object.keys(createData).length &&
                createData.company &&
                createData.company.email) {
                createData.metadata = {
                    creationDate: new Date().getTime(),
                    updateDate: null
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

        this.router.get('/resort-customer/detail/template', (req, res) => {
            res.status(400).send('Insufficient data. Missing folderId and templateName.');
        });

        this.router.get('/resort-customer/detail/:folderId', (req, res) => {
            res.status(400).send('Insufficient data. Missing templateName.');
        });

        this.router.get('/resort-customer/detail/template/:folderId/:templateName', (req, res) => {
            const folderId = req.params.folderId;
            const templateName = req.params.templateName;
            try {
                // this.mailchimpDao.getTemplate(folderId)
                //     .then(template => {
                //         res.status(200).send(template);
                //     });
            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        });

        this.router.post('/resort-customer/detail/template', this.jsonParser, (req, res) => {
            const templateData: IResortCustomerTemplate = req.body;
            console.log('save', templateData);
            try {
                if (!templateData.folderId) {
                    const folder = this.mailchimpDao.createTemplateFolder(templateData.resortName);
                    console.log('folder created', folder);
                    templateData.folderId = folder.id;
                }

                this.mailchimpDao.createTemplate(templateData)
                    .then(result => {
                        console.log('result', result);
                        res.status(201).send(result);
                    })
                    .catch(error => {
                        console.log('error', error);
                        res.status(500).send(error);
                    });

            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        });
    }
}
