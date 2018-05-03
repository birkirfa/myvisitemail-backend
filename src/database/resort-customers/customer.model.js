"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_model_1 = require("../base.model");
var CustomerModel = /** @class */ (function (_super) {
    __extends(CustomerModel, _super);
    function CustomerModel(schemaObj) {
        var _this = this;
        var templateData = {
            templateId: {
                type: String
            },
            html: {
                type: String
            },
            subject: {
                type: String
            },
            toUse: {
                type: Boolean
            }
        };
        if (!schemaObj) {
            var fullModel = {
                contact: {
                    name: {
                        type: String,
                        required: true
                    },
                    email: {
                        type: String,
                        required: true
                    },
                    phone: {
                        type: String,
                        required: true
                    },
                    address: {
                        type: String,
                        required: true
                    }
                },
                area: {
                    type: String,
                    required: true
                },
                type: {
                    type: String
                },
                invoice: {
                    type: Number
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
                        type: Number
                    }
                }
            };
            _this = _super.call(this, fullModel) || this;
        }
        else {
            _this = _super.call(this, schemaObj) || this;
        }
        return _this;
    }
    return CustomerModel;
}(base_model_1.BaseModel));
exports.CustomerModel = CustomerModel;
