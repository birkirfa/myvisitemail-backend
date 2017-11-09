import { FileModel, IFile } from './filesModel';
import { GenericDao } from '../genericDao'
import * as MongoClient from 'mongoose';

export class FileDao extends GenericDao {
    constructor () {
        let file = new FileModel(false);
        super(file.getSchema(), 'files');
    }
    
    public getAllFiles(): Promise<any[]> {
        return new Promise<any> ((resolve, reject) => {
            this.getAll()
                .then((files) => {
                    if (!files) {
                        reject ('Files not founded.');
                    } else {
                        resolve(files);
                    }
                })
                .catch(error => reject(error));
        });
    }

    public getFile(fileId): Promise<any> {
        return new Promise<any> ((resolve, reject) => {
            this.querySingle({_id: new MongoClient.Types.ObjectId(fileId)})
                .then((file) => {
                    if (!file) {
                        reject ('File not found');
                    } else {
                        resolve(file);
                    }
                })
                .catch(error => reject(error));
        });
    }
    
    public createFile(file: IFile): Promise<any> {
        return new Promise ((resolve, reject) => {
            this.create(file)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
    
    public updateFile(file: IFile): Promise<any> {
        return new Promise ((resolve, reject) => {
            this.update(file._id, file)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
    
    public deleteFile(fileId: any) {
        return new Promise ((resolve, reject) => {
            this.remove(fileId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
}