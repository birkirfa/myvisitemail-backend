import {BaseModel} from '../base.model';
import * as extend from 'extend';

export class CustomerModel extends BaseModel {

    constructor(schemaObj) {
        const baseCustomer = {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            }
        };
        if (!schemaObj) {
            const fullModel = {
                contact: baseCustomer,
                area: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String
                },
                invoice: {
                    type: Number,
                },
                rooms: {
                    type: Number
                },
                backgroundId: {
                    type: String
                },
                metadata: {
                    creationDate: {
                        type: Number,
                        required: true
                    },
                    updateDate: {
                        type: Number,
                    }
                }
            };
            fullModel.contact = extend(fullModel.contact, baseCustomer);
            super(fullModel);
        } else {
            super (schemaObj);
        }
    }
}
