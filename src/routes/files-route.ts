import * as Express from 'express';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';
import * as cors from 'cors';
import { FileDao } from '../database/files/filesDao';
import { IFile, FileType } from '../database/files/filesModel';

const jsonParser = bodyParser.json();
const formParser = multer();
const dao = new FileDao();

export class FilesRoute {
    router: Express.Router;

    constructor() {
        this.router = Express.Router();

        this.router.get('/', jsonParser, (req, res) => {
            dao.getAllFiles()
                .then(files => {
                    res.status(200).json(files);
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        });

        this.router.get('/:fileId', jsonParser, (req, res) => {
            dao.getFile(req.params.fileId)
                .then(file => {
                    res.status(200).json(file);
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        });

        this.router.get('/type/:typeId', jsonParser, (req, res) => {
            dao.getFilesByType(req.params.typeId)
                .then(file => {
                    res.status(200).json(file);
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        });

        this.router.post('/', formParser.any(), (req, res) => {
            if (!req.body) {
                res.status(400).send('No file presented in request.');
            } else {
                const file: IFile = {
                    _id: null,
                    type: req.body.fileType,
                    file: req.body.file,
                    contentType: req.body.contentType
                };

                dao.createFile(file)
                    .then(f => {
                        res.status(201).json(f);
                    })
                    .catch(error => {
                        res.status(500).json(error);
                    });
            }
        });

        this.router.put('/', formParser.any(), (req, res) => {
            if (!req.body) {
                res.status(400).send('No file presented in request.');
            } else {
                const file: IFile = {
                    _id: null,
                    type: req.body.fileType,
                    file: req.body.file,
                    contentType: req.body.contentType
                };
                dao.updateFile(file)
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
            dao.remove(req.params.fileId)
                .then(file => {
                    res.status(204).end();
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        });
    }
}
