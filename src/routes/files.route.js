"use strict";
exports.__esModule = true;
var Express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var uuid_1 = require("uuid");
var files_dao_1 = require("../database/files/files.dao");
var FilesRoute = /** @class */ (function () {
    function FilesRoute() {
        var _this = this;
        this.jsonParser = bodyParser.json();
        this.formParser = multer();
        this.dao = new files_dao_1.FileDao();
        this.router = Express.Router();
        this.router.get('/', this.jsonParser, function (req, res) {
            _this.dao.getAllFiles()
                .then(function (files) {
                res.status(200).json(files);
            })["catch"](function (error) {
                res.status(500).json(error);
            });
        });
        this.router.get('/:fileId', this.jsonParser, function (req, res) {
            _this.dao.getFile(req.params.fileId)
                .then(function (file) {
                res.status(200).json(file);
            })["catch"](function (error) {
                res.status(500).json(error);
            });
        });
        this.router.get('/type/:typeId', this.jsonParser, function (req, res) {
            _this.dao.getFilesByType(req.params.typeId)
                .then(function (file) {
                res.status(200).json(file);
            })["catch"](function (error) {
                res.status(500).json(error);
            });
        });
        this.router.post('/', this.formParser.any(), function (req, res) {
            if (!req.body) {
                res.status(400).send('No file presented in request.');
            }
            else {
                var file = {
                    _id: null,
                    id: uuid_1.v4(),
                    type: req.body.fileType,
                    file: req.body.file,
                    contentType: req.body.contentType
                };
                _this.dao.createFile(file)
                    .then(function (f) {
                    res.status(201).json(f);
                })["catch"](function (error) {
                    res.status(500).json(error);
                });
            }
        });
        this.router.put('/', this.formParser.any(), function (req, res) {
            if (!req.body) {
                res.status(400).send('No file presented in request.');
            }
            else {
                var file = {
                    _id: null,
                    id: req.body.id,
                    type: req.body.fileType,
                    file: req.body.file,
                    contentType: req.body.contentType
                };
                _this.dao.updateFile(file)
                    .then(function (f) {
                    res.status(204).end();
                    res.status(200).json(f);
                })["catch"](function (error) {
                    res.status(500).json(error);
                });
            }
        });
        this.router["delete"]('/', function (req, res) {
            res.status(400).send('Missing fileId parameter.');
        });
        this.router["delete"]('/:fileId', function (req, res) {
            _this.dao.deleteFile(req.params.fileId)
                .then(function (file) {
                res.status(204).end();
            })["catch"](function (error) {
                res.status(500).json(error);
            });
        });
    }
    return FilesRoute;
}());
exports.FilesRoute = FilesRoute;
