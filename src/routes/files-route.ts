import * as Express from 'express';
import * as bodyParser from'body-parser';
import * as cors from "cors";
import { FileDao } from '../database/files/filesDao';
import { IFile, FileType } from '../database/files/filesModel';
const jsonParser = bodyParser.json();
const dao = new FileDao();

export class FilesRoute {
    router: Express.Router;

    constructor () {
        this.router = Express.Router();

        this.router.get('/', jsonParser, (req, res) => {
            dao.getAllFiles()
                .then(files => {
                    res.status(200).json(files);
                })
                .catch(error => {
                    res.status(500).json(error);
                })
            });
            
        this.router.get('/:fileId', jsonParser, (req, res) => {
            dao.getFile(req.params.fileId)
                .then(file => {
                    res.status(200).json(file);
                })
                .catch(error => {
                    res.status(500).json(error);
                })
            });
        
        this.router.post('/', jsonParser, (req, res) => {
            const content = req.body.file;
            const contentType = req.body.contentType;
            const fileType = req.body.fileType;
            
            if(!content){
                res.status(400).send('No file presented in request.');
            } else {
                const file: IFile = {
                    _id: null,
                    type: fileType,
                    file: content,
                    contentType: contentType
                }
                
                dao.createFile(file)
                    .then(file => {
                        res.status(201).json('File created.');
                    })
                    .catch(error => {
                        res.status(500).json(error);
                    });
            }  
        });
        
        this.router.put('/', jsonParser, (req, res) => {
            let file: IFile = req.body;
            dao.updateFile(file)
                .then(file => {
                    // res.status(204).end();
                    res.status(200).json(file);
                })
                .catch(error => {
                    res.status(500).json(error);
                })
        });

        this.router.delete('/', (req, res) => {
            res.status(400).send('Missing fileId parameter.');
        });

        this.router.delete('/:fileId', (req, res) => {
            dao.remove(req.params.fileId)
                .then(file => {
                    // res.status(204).end();
                    res.status(200).json('File deleted');
                })
                .catch(error => {
                    res.status(500).json(error);
                })
        });
    }
}