import { FileModel, IFile } from './filesModel';
import { GenericDao } from '../genericDao'
import * as MongoClient from 'mongoose';

export class FileDao extends GenericDao {
    constructor () {
        let file = new FileModel(false);
        super(file.getSchema(), 'files');
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
                .catch(reject);
        });
    }
    
    public createFile(file: IFile): Promise<any> {
        return new Promise ((resolve, reject) => {
            this.create(file)
                .then((result) => {
                    resolve(result);
                })
                .catch(reject);
        });
    }
    
    public updateFile(file: IFile): Promise<any> {
        return new Promise ((resolve, reject) => {
            this.update(file._id, file)
                .then((result) => {
                    resolve(result);
                })
                .catch(reject);
        });
    }
    
    public deleteFile(fileId: any) {
        return new Promise ((resolve, reject) => {
            this.remove(fileId)
                .then((result) => {
                    resolve(result);
                })
                .catch(reject);
        });
    }
}