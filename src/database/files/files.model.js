"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("../base.model");
class FileModel extends base_model_1.BaseModel {
    constructor(schemaObj) {
        super((schemaObj || {
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
        }));
    }
}
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
//# sourceMappingURL=files.model.js.map