"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const files_model_1 = require("./files.model");
const generic_dao_1 = require("../generic.dao");
const MongoClient = require("mongoose");
class FileDao extends generic_dao_1.GenericDao {
    constructor() {
        const file = new files_model_1.FileModel(false);
        super(file.getSchema(), 'files');
    }
    getAllFiles() {
        return new Promise((resolve, reject) => {
            this.getAll()
                .then((files) => {
                if (!files) {
                    reject('Files not founded.');
                }
                else {
                    resolve(files);
                }
            })
                .catch(error => reject(error));
        });
    }
    getFile(fileId) {
        return new Promise((resolve, reject) => {
            this.querySingle({ id: fileId })
                .then((file) => {
                if (!file) {
                    reject('File not found');
                }
                else {
                    resolve(file);
                }
            })
                .catch(error => reject(error));
        });
    }
    getFilesByType(type) {
        return new Promise((resolve, reject) => {
            this.queryAll({ type: type })
                .then((file) => {
                if (!file) {
                    reject('File not found');
                }
                else {
                    resolve(file);
                }
            })
                .catch(error => reject(error));
        });
    }
    createFile(file) {
        return new Promise((resolve, reject) => {
            this.create(file)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
    updateFile(file) {
        return new Promise((resolve, reject) => {
            if (typeof file._id === 'string') {
                file._id = MongoClient.Types.ObjectId(file._id);
            }
            this.update(file._id, file)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
    deleteFile(fileId) {
        return new Promise((resolve, reject) => {
            this.removeByCustomId(fileId)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
}
exports.FileDao = FileDao;
//# sourceMappingURL=files.dao.js.map