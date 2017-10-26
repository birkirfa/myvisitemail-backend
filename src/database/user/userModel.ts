import * as MongoClient from 'mongoose'
var Schema = MongoClient.Schema;

export class UserModel {
    /*
     * Basic userSchema definition test
     */
    private user = {
        firstName : String,
        lastName : String,
        password : String,
        isAdmin : Boolean,
        eMail : String
    };
    private connection: Object;

    constructor (schemaObj, modelName) {
        var userSchema;
        var name = modelName || 'users'
        if (schemaObj) {
            userSchema = new Schema (schemaObj);
        } else {
            userSchema = new Schema (this.user);
        }
        this.connection = MongoClient.model(name, userSchema);
    }

    public getConnection () {
        return this.connection;
    }
}