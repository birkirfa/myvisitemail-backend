"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const uuid_1 = require("uuid");
const files_dao_1 = require("../database/files/files.dao");
class FilesRoute {
    constructor() {
        this.jsonParser = bodyParser.json();
        this.formParser = multer();
        this.dao = new files_dao_1.FileDao();
        this.router = Express.Router();
        this.router.get('/', this.jsonParser, (req, res) => {
            this.dao.getAllFiles()
                .then(files => {
                res.status(200).json(files);
            })
                .catch(error => {
                res.status(500).json(error);
            });
        });
        this.router.get('/:fileId', this.jsonParser, (req, res) => {
            this.dao.getFile(req.params.fileId)
                .then(file => {
                res.status(200).json(file);
            })
                .catch(error => {
                res.status(500).json(error);
            });
        });
        this.router.get('/type/:typeId', this.jsonParser, (req, res) => {
            this.dao.getFilesByType(req.params.typeId)
                .then(file => {
                res.status(200).json(file);
            })
                .catch(error => {
                res.status(500).json(error);
            });
        });
        this.router.post('/', this.formParser.any(), (req, res) => {
            if (!req.body) {
                res.status(400).send('No file presented in request.');
            }
            else {
                const file = {
                    _id: null,
                    id: uuid_1.v4(),
                    type: req.body.fileType,
                    file: req.body.file,
                    contentType: req.body.contentType
                };
                this.dao.createFile(file)
                    .then(f => {
                    res.status(201).json(f);
                })
                    .catch(error => {
                    res.status(500).json(error);
                });
            }
        });
        this.router.put('/', this.formParser.any(), (req, res) => {
            if (!req.body) {
                res.status(400).send('No file presented in request.');
            }
            else {
                const file = {
                    _id: null,
                    id: req.body.id,
                    type: req.body.fileType,
                    file: req.body.file,
                    contentType: req.body.contentType
                };
                this.dao.updateFile(file)
                    .then(f => {
                    res.status(204).end();
                    res.status(200).json(f);
                })
                    .catch(error => {
                    res.status(500).json(error);
                });
            }
        });
        this.router.delete('/', (req, res) => {
            res.status(400).send('Missing fileId parameter.');
        });
        this.router.delete('/:fileId', (req, res) => {
            this.dao.deleteFile(req.params.fileId)
                .then(file => {
                res.status(204).end();
            })
                .catch(error => {
                res.status(500).json(error);
            });
        });
    }
}
exports.FilesRoute = FilesRoute;
//# sourceMappingURL=files.route.js.map