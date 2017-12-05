import { UserModel, IUser } from './user.model';
import { GenericDao } from '../generic.dao';
import * as MongoClient from 'mongoose';
import { FileDao } from '../files/files.dao';

export class UserDao extends GenericDao {

    constructor() {
        const user = new UserModel(false);
        super(user.getSchema(), 'users');
    }

    public login(eMail, password) {
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
                                const files = new FileDao();
                                if (user.avatarId) {
                                    files.getFile(user.avatarId)
                                        .then(file => {
                                            user.avatarId = file.file;
                                            resolve(user);
                                        })
                                        .catch(error => {
                                            reject(error);
                                        });
                                } else {
                                    resolve(user);
                                }
                            } else {
                                reject('Wrong credentials.');
                            }
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    }
}
