"use strict";
exports.__esModule = true;
var bokun_dao_1 = require("../database/bokun/bokun.dao");
var bodyParser = require("body-parser");
var Express = require("express");
var jsonParser = bodyParser.json();
var BokunRoute = /** @class */ (function () {
    function BokunRoute() {
        var _this = this;
        this.dao = new bokun_dao_1.BokunDAO();
        this.router = Express.Router();
        this.router.get('/product-list', function (req, res) {
            _this.dao.getProductList()
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/product-list/items/slug/:listSlug', function (req, res) {
            _this.dao.getProductsFromListBySlug(req.params.listSlug)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/product-list/items/:listId', function (req, res) {
            _this.dao.getProductsFromListById(req.params.listId)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/product-list/items/:listId', function (req, res) {
            _this.dao.getProductsFromListById(req.params.listId)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/search/bookings/:productId', function (req, res) {
            _this.dao.queryBookings(true, req.params.productId)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
        this.router.get('/bookings', function (req, res) {
            _this.dao.queryBookings(false, 0)
                .then(function (result) {
                res.status(200).json(result);
            })["catch"](function (error) {
                res.status(500).send(error);
            });
        });
    }
    return BokunRoute;
}());
exports.BokunRoute = BokunRoute;
