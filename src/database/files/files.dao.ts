import { FileModel, IFile, FileType } from './files.model';
import { GenericDao } from '../generic.dao';
import * as MongoClient from 'mongoose';

export class FileDao extends GenericDao {
    constructor() {
        const file = new FileModel(false);
        super(file.getSchema(), 'files');
    }

    public getAllFiles(): Promise<IFile[]> {
        return new Promise<IFile[]>((resolve, reject) => {
            this.getAll()
                .then((files) => {
                    if (!files) {
                        reject('Files not founded.');
                    } else {
                        resolve(files);
                    }
                })
                .catch(error => reject(error));
        });
    }

    public getFile(fileId: string | number | MongoClient.Types.ObjectId): Promise<IFile> {
        return new Promise<IFile>((resolve, reject) => {
            this.querySingle({ id: fileId })
                .then((file) => {
                    if (!file) {
                        reject('File not found');
                    } else {
                        resolve(file);
                    }
                })
                .catch(error => reject(error));
        });
    }

    public getFilesByType(type: FileType): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.queryAll({ type: type })
                .then((file) => {
                    if (!file) {
                        reject('File not found');
                    } else {
                        resolve(file);
                    }
                })
                .catch(error => reject(error));
        });
    }

    public createFile(file: IFile): Promise<IFile> {
        return new Promise<IFile>((resolve, reject) => {
            this.create(file)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    public updateFile(file: IFile): Promise<any> {
        return new Promise((resolve, reject) => {
            if (typeof file._id === 'string') {
                file._id = MongoClient.Types.ObjectId(file._id);
            }
            this.update(file._id, file)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    public deleteFile(fileId: any) {
        return new Promise((resolve, reject) => {
            this.removeByCustomId(fileId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
}
