import * as MongoClient from 'mongoose'

export class BaseModel {
    /*
     * Basic userSchema definition test
     */
    private schema: MongoClient.Schema;

    constructor(schemaObj) {
        this.schema = new MongoClient.Schema(schemaObj);
    }

    public getSchema() {
        return this.schema;
    }
}