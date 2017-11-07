import { UserModel, IUser } from './userModel';
import { GenericDao } from '../genericDao'
import { FileDao } from '../files/filesDao';

export class UserDao extends GenericDao {

    constructor () {
        let user = new UserModel(false);
        super (user.getSchema(), 'users');
    }

    public login (eMail, password) {
        var self= this;
        return new Promise ((resolve, reject) => {
            self.querySingle({'eMail': eMail})
                .then((user) => {
                    if (!user) {
                        reject ('Wrong credentials.');
                    }
                    user.comparePassword(password)
                        .then((match) => {
                            if (match) {
                                const files = new FileDao();
                                
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