import { BaseModel } from '../baseModel';
import * as MongoClient from 'mongoose';

export class FileModel extends BaseModel{
    constructor (schemaObj) {
        super((schemaObj || {
            type: {
                type: Number,
                required: true
            },
            file: {
                type: Buffer,
                required: true
            },
            contentType: {
                type: String,
                required: false
            }
        }));
    }
}

export enum FileType {
    UserAvatar = 0, // marge it with Image?
    Image = 1,
    Video = 2,
    Document = 3,
    Other = 4
}

export interface IFile {
    _id: MongoClient.Types.ObjectId;
    type: FileType;
    file: any;
    contentType: string;
}