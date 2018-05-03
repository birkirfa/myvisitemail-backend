"use strict";
exports.__esModule = true;
var Express = require("express");
var user_dao_1 = require("../database/user/user.dao");
var bodyParser = require("body-parser");
var UserRoute = /** @class */ (function () {
    function UserRoute() {
        var _this = this;
        this.jsonParser = bodyParser.json();
        this.dao = new user_dao_1.UserDao();
        this.router = Express.Router();
        this.router.get('/', function (req, res) {
            _this.dao.getAll()
                .then(function (users) {
                res.status(200).json(users);
            })["catch"](function (error) {
                res.status(500).send('Database error.');
            });
        });
        this.router.post('/', this.jsonParser, function (req, res) {
            var createData = req.body;
            if (Object.keys(createData).length && createData.eMail) {
                _this.dao.createWithUniqueCheck(createData, { eMail: createData.eMail })
                    .then(function (response) {
                    res.status(200).json(response);
                })["catch"](function (error) {
                    res.status(500).json(error);
                });
            }
            else {
                res.status(400).send('Insufficient data.');
            }
        });
        this.router.put('/', function (req, res) {
            res.status(400).send('Missing userId parameter.');
        });
        this.router.put('/:userId', this.jsonParser, function (req, res) {
            var id = req.params.userId;
            var updateData = req.body;
            if (Object.keys(updateData).length) {
                _this.dao.update(id, updateData)
                    .then(function (response) {
                    res.status(200).json(response);
                })["catch"](function (error) {
                    res.status(500).json(error);
                });
            }
            else {
                res.status(400).send('Insufficient data.');
            }
        });
        this.router.post('/login', this.jsonParser, function (req, res) {
            var userCandidate = req.body;
            if (Object.keys(userCandidate).length) {
                if (userCandidate.eMail) {
                    if (userCandidate.password) {
                        _this.dao.login(userCandidate.eMail, userCandidate.password)
                            .then(function (logged) {
                            res.status(200).json(logged);
                        })["catch"](function (error) {
                            res.status(500).send(error || 'Wrong credentials.');
                        });
                    }
                    else {
                        res.status(400).send('eMail is required');
                    }
                }
                else {
                    res.status(400).send('eMail is required');
                }
            }
        });
        this.router["delete"]('/', function (req, res) {
            res.status(400).send('Missing userId parameter.');
        });
        this.router["delete"]('/:userId', function (req, res) {
            _this.dao.remove(req.params.userId)
                .then(function (response) {
                res.status(200).json('User ' + response.firstName + ' deleted');
            })["catch"](function (error) {
                res.status(500).json(error);
            });
        });
    }
    return UserRoute;
}());
exports.UserRoute = UserRoute;
