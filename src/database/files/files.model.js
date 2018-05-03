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
var FileModel = /** @class */ (function (_super) {
    __extends(FileModel, _super);
    function FileModel(schemaObj) {
        return _super.call(this, (schemaObj || {
            id: {
                type: String,
                required: true
            },
            type: {
                type: Number,
                required: true
            },
            file: {
                type: Buffer,
                required: true
            },
            contentType: {
                type: String,
                required: false
            }
        })) || this;
    }
    return FileModel;
}(base_model_1.BaseModel));
exports.FileModel = FileModel;
var FileType;
(function (FileType) {
    FileType[FileType["UserAvatar"] = 0] = "UserAvatar";
    FileType[FileType["Image"] = 1] = "Image";
    FileType[FileType["Video"] = 2] = "Video";
    FileType[FileType["Document"] = 3] = "Document";
    FileType[FileType["Other"] = 4] = "Other";
    FileType[FileType["TestFile"] = 5] = "TestFile";
})(FileType = exports.FileType || (exports.FileType = {}));
