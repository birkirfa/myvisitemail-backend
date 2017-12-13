import {BaseModel} from "../base.model";

export class RemovedCustomerModel extends BaseModel {

    constructor(schemaObj) {
        if (!schemaObj) {
            let fullModel = {
                removedDate: {
                    type: Number,
                    required: true
                }
            };
            super(fullModel);
        } else {
            super (schemaObj);
        }
    }
}