import * as Express from 'express';
import * as bodyParser from'body-parser';
import { MailchimpDao } from '../database/mailchimp/mailchimpDao';
const jsonParser = bodyParser.json();

export class MailchimpRoute {
    router: Express.Router;
    private dao: MailchimpDao = new MailchimpDao('');
    constructor () {

        this.router = Express.Router();

        this.router.get('/lists', (req, res) => {
            this.dao.getLists()
                .then((result) => {
                    res.status(200).json(result.lists)
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        });

        this.router.get('/lists/:id', (req, res) => {
            this.dao.getListById(req.params.id)
                .then((list) => {
                    res.status(200).json(list)
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        });

        this.router.get('/campaign', (req, res) => {
            this.dao.getCampaigns()
                .then((list) => {
                    res.status(200).json(list)
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        });

        this.router.get('/automations', (req, res) => {
            this.dao.getAutomations()
                .then((list) => {
                    res.status(200).json(list)
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        });

        this.router.post('/campaign', (req, res) => {
            this.dao.createCampaign(req.body)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        });

        this.router.patch('/campaign/:campaignId', (req, res) => {
            this.dao.updateCampaign(req.body, req.params.campaignId)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        });

        this.router.get('/campaign/:campaignId/:action', (req, res) => {
            let action = req.params.action;
            let campaignId = req.params.campaignId;
            let options = req.body || {};
            this.dao.performCampaignAction(campaignId, action, options)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        })
    }
}