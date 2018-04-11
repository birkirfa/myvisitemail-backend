import {BaseModel} from '../base.model';

export class CustomerModel extends BaseModel {

    constructor(schemaObj) {
        const templateData = {
            templateId: {
                type: String
            },
            html: {
                type: String
            },
            subject: {
                type: String
            }
        };
        if (!schemaObj) {
            const fullModel = {
                contact: {
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
                },
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
                templateFolderId: {
                    type: String
                },
                listId: {
                    type: String
                },
                booked: templateData,
                'check-in': templateData,
                'check-out': templateData,
                cancellation: templateData,
                APIAccess: {
                    bokun: {
                        accessKey: {
                            type: String,
                            required: true
                        },
                        secretKey: {
                            type: String,
                            required: true
                        }
                    }
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
            super(fullModel);
        } else {
            super (schemaObj);
        }
    }
}
