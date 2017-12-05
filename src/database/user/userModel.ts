import { BaseModel } from '../baseModel';
import * as bcrypt from 'bcrypt';
import * as MongoClient from 'mongoose';
const SALT_WORK_FACTOR = 10;

export class UserModel extends BaseModel {

    constructor(schemaObj) {
        super((schemaObj || {
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            password: {
                type: String,
                required: true,
            },
            isAdmin: {
                type: Boolean,
                required: true,
            },
            eMail: {
                type: String,
                required: true
            },
            avatarId: {
                type: String,
                required: true
            }
        }));

        this.getSchema().pre('save', (next) => {
            console.log('save', this);
            console.log('save - next', next);
            // const user: IUser = this;
            // // only hash the password if it has been modified (or is new)
            // // if (!user.isModified('password')) { return next(); }

            // // generate a salt
            // bcrypt.genSalt(SALT_WORK_FACTOR)
            //     .then((salt) => {
            //         // hash the password along with our new salt
            //         bcrypt.hash(user.password, salt)
            //             .then((hash) => {
            //                 // override the cleartext password with the hashed one
            //                 user.password = hash;
            //                 next();
            //             })
            //             .catch((err) => {
            //                 next(err);
            //             });
            //     })
            //     .catch((err) => {
            //         next(err);
            //     });
        });

        this.getSchema().methods.comparePassword = function(candidate) {
            return new Promise((resolve, reject) => {
                bcrypt.compare(candidate, this.password, (err, isMatch) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(isMatch);
                });
            });
        };
    }
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    isAdmin: boolean;
    eMail: string;
    avatarId: any;
}
