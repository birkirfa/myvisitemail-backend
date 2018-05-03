"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoClient = require("mongoose");
class GenericDao {
    constructor(schema, modelName) {
        try {
            this.Model = MongoClient.model(modelName);
        }
        catch (error) {
            this.Model = MongoClient.model(modelName, schema);
        }
    }
    getModel() {
        return this.Model;
    }
    getAll() {
        return this.Model.find({}).exec();
    }
    queryAll(queryObj) {
        return this.Model.find(queryObj).exec();
    }
    querySingle(queryObj) {
        return new Promise((resolve, reject) => {
            this.Model.findOne(queryObj).then(resolve).catch(reject);
        });
    }
    create(createData) {
        return new Promise((resolve, reject) => {
            const obj = new this.Model(createData);
            obj.save().then(resolve).catch(reject);
        });
    }
    createWithUniqueCheck(createData, queryObj) {
        return new Promise((resolve, reject) => {
            this.querySingle(queryObj)
                .then((response) => {
                if (response) {
                    reject('Key duplication detected');
                }
                else {
                    let obj = new this.Model(createData);
                    obj.save().then(resolve).catch(reject);
                }
            })
                .catch(reject);
        });
    }
    update(itemId, updateData) {
        return new Promise((resolve, reject) => {
            this.Model.findById(itemId)
                .then((item) => {
                for (let key in updateData) {
                    if (!item[key] && item[key] !== 0) { // carefull around falsy values
                        reject('Attempted to update a non existeny property.');
                        return;
                    }
                }
                item.set(updateData);
                item.save().then(resolve).catch(reject);
            })
                .catch(err => {
                console.error(err);
                reject(err);
                ;
            });
        });
    }
    remove(itemId) {
        return this.Model.findOneAndRemove({ _id: itemId }).exec();
    }
    removeByCustomId(itemId) {
        return this.Model.findOneAndRemove({ id: itemId }).exec();
    }
}
exports.GenericDao = GenericDao;
//# sourceMappingURL=generic.dao.js.map