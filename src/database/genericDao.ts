import * as MongoClient from 'mongoose'

export class GenericDao {
    private Model;

    constructor (schema, modelName) {
        this.Model = MongoClient.model(modelName, schema);
    }

    public getModel () {
        return this.Model;
    }

    public getAll () {
        return this.Model.find({}).exec();
    }

    public querySingle (queryObj) {
        return this.Model.findOne(queryObj);
    }

    public create (createData) {
        let obj = new this.Model(createData);
        return new Promise ((resolve, reject) => {
            obj.save().then(resolve).catch(reject);
        });
    }

    public update (itemId, updateData) {
        let self = this;
        return new Promise ((resolve, reject) => {
            self.Model.findById(itemId)
                .then(function (item) {
                    item.set(updateData);
                    item.save().then(resolve).catch(reject);
                })
                .catch(reject);
        });
    }

    public remove (itemId) {
        return this.Model.findOneAndRemove({_id: itemId}).exec();
    }
}