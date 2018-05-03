"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
const generic_dao_1 = require("../generic.dao");
const files_dao_1 = require("../files/files.dao");
class UserDao extends generic_dao_1.GenericDao {
    constructor() {
        const user = new user_model_1.UserModel(false);
        super(user.getSchema(), 'users');
    }
    login(eMail, password) {
        return new Promise((resolve, reject) => {
            this.querySingle({ eMail: eMail })
                .then((user) => {
                if (!user) {
                    reject('Wrong credentials.');
                }
                user.comparePassword(password)
                    .then((match) => {
                    if (match) {
                        user.password = '';
                        const files = new files_dao_1.FileDao();
                        if (user.avatarId) {
                            files.getFile(user.avatarId)
                                .then(file => {
                                user.avatarId = file.file;
                                resolve(user);
                            })
                                .catch(error => {
                                reject(error);
                            });
                        }
                        else {
                            resolve(user);
                        }
                    }
                    else {
                        reject('Wrong credentials.');
                    }
                })
                    .catch(reject);
            })
                .catch(reject);
        });
    }
}
exports.UserDao = UserDao;
//# sourceMappingURL=user.dao.js.map