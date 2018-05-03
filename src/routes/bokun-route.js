"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bokun_dao_1 = require("../database/bokun/bokun.dao");
const bodyParser = require("body-parser");
const Express = require("express");
const jsonParser = bodyParser.json();
class BokunRoute {
    constructor() {
        this.dao = new bokun_dao_1.BokunDAO();
        this.router = Express.Router();
        this.router.get('/product-list', (req, res) => {
            this.dao.getProductList()
                .then((result) => {
                res.status(200).json(result);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        });
        this.router.get('/product-list/items/slug/:listSlug', (req, res) => {
            this.dao.getProductsFromListBySlug(req.params.listSlug)
                .then((result) => {
                res.status(200).json(result);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        });
        this.router.get('/product-list/items/:listId', (req, res) => {
            this.dao.getProductsFromListById(req.params.listId)
                .then((result) => {
                res.status(200).json(result);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        });
        this.router.get('/product-list/items/:listId', (req, res) => {
            this.dao.getProductsFromListById(req.params.listId)
                .then((result) => {
                res.status(200).json(result);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        });
        this.router.get('/search/bookings/:productId', (req, res) => {
            this.dao.queryBookings(true, req.params.productId)
                .then((result) => {
                res.status(200).json(result);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        });
        this.router.get('/bookings', (req, res) => {
            this.dao.queryBookings(false, 0)
                .then((result) => {
                res.status(200).json(result);
            })
                .catch((error) => {
                res.status(500).send(error);
            });
        });
    }
}
exports.BokunRoute = BokunRoute;
//# sourceMappingURL=bokun-route.js.map