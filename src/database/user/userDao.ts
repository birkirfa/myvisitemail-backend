import { UserModel } from './userModel'
export class UserDao {
    private user;

    constructor (schemaObj, modelName) {
        this.user = new UserModel(schemaObj, modelName);
    }

    public getAll () {
        return this.user.getConnection().find({}).exec();
    }
}