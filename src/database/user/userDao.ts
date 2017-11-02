import { UserModel } from './userModel'
import { GenericDao } from '../genericDao'

export class UserDao extends GenericDao {

    constructor () {
        let user = new UserModel(false);
        super (user.getSchema(), 'users');
    }

    public login (eMail, password) {
        var self= this;
        return new Promise ((resolve, reject) => {
            self.querySingle({'eMail': eMail})
                .then(function (user) {
                    if (!user) {
                        reject ('Wrong credentials.');
                    }
                    user.comparePassword(password)
                        .then((match) => {
                            if (match) {
                                resolve(user);
                            } else {
                                reject('Wrong credentials.');
                            }
                        })
                        .catch(reject)
                })
                .catch(reject);
        });

    }
}