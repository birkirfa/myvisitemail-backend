import { BaseModel } from '../baseModel';
import * as bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 10;

export class UserModel extends BaseModel{

    constructor (schemaObj) {
        super((schemaObj || {
            firstName : String,
            lastName : String,
            password : String,
            isAdmin : Boolean,
            eMail : String
        }));

        this.getSchema().pre('save', function(next) {
            var user = this;

            // only hash the password if it has been modified (or is new)
            if (!user.isModified('password')) return next();

            // generate a salt
            bcrypt.genSalt(SALT_WORK_FACTOR)
                .then(function (salt){
                    // hash the password along with our new salt
                    bcrypt.hash(user.password, salt)
                        .then((hash) => {
                            // override the cleartext password with the hashed one
                            user.password = hash;
                            next();
                        })
                        .catch((err) => {
                            next(err);
                        });
                })
                .catch((err) => {
                    next(err);
                }) ;
        });

        this.getSchema().methods.comparePassword = function(candidate) {
            return new Promise ((resolve, reject) => {
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