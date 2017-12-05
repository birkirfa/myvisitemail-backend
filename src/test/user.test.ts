import * as expect from 'expect.js';
import * as superAgent from 'superagent';
import 'mocha';
import { UserDao } from "../database/user/user.dao";
const dao = new UserDao();
// import {describe, it, timeout} from "mocha-typescript";

describe ('/user API endpoint', () => {

    let whitListedUrl: string;

    let testUser: Object;

    let overwriteUser;

    before('Setup test data and create authorized origin', (done) => {
        whitListedUrl = 'http://localhost:4200';
        testUser = {
            "firstName" : "test",
            "lastName" : "user",
            "password" : "delete",
            "isAdmin" : true,
            "eMail" : "test.user@delete.me"
        };
        overwriteUser = {
            "firstName" : "test",
            "lastName" : "user",
            "password" : "delete",
            "isAdmin" : true,
            "eMail" : "test.user@delete.me"
        };
        done();
    });

    describe ('GET /user', () => {
        it ('Returns 401 when request is made from an unauthorized origin', (done) => {
            superAgent.get('http://localhost:8000/user')
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(401);
                    expect(response.text).to.eql('Authorization failure');
                    done();
                });
        });

        it ('Returns 200 when request is made from a whiteListed origin', (done) => {
            superAgent.get('http://localhost:8000/user')
                .set('origin', whitListedUrl)
                .end(function(error, response) {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(200);
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.be.greaterThan(0);
                    done();
                });
        });
    });

    describe ('POST /user', () => {
        it ('Returns 401 when request is made from an unauthorized origin', (done) => {
            superAgent.post('http://localhost:8000/user')
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(401);
                    expect(response.text).to.eql('Authorization failure');
                    done();
                });
        });

        it ('Returns 400 with empty data', (done) => {
            superAgent.post('http://localhost:8000/user')
                .set('origin', whitListedUrl)
                .send({})
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(400);
                    expect(response.text).to.eql('Insufficient data.');
                    done();
                });
        });

        it ('Returns 500 with empty data', (done) => {
            superAgent.post('http://localhost:8000/user')
                .set('origin', whitListedUrl)
                .send({
                    eMail: 'someUniqueEmail'
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(500);
                    expect(response.body).to.have.property('errors');
                    expect(Object.keys(response.body.errors).length).to.eql(4);
                    done();
                });
        });

        it ('Returns 200 with valid data', (done) => {
            superAgent.post('http://localhost:8000/user')
                .set('origin', whitListedUrl)
                .send(testUser)
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(200);
                    expect(response.body).to.have.property('_id');
                    expect(response.body).to.have.property('firstName');
                    expect(response.body.firstName).to.eql('test');
                    expect(response.body).to.have.property('lastName');
                    expect(response.body.lastName).to.eql('user');
                    expect(response.body).to.have.property('password');
                    expect(response.body).to.have.property('isAdmin');
                    expect(response.body.isAdmin).to.eql(true);
                    expect(response.body).to.have.property('eMail');
                    expect(response.body.eMail).to.eql('test.user@delete.me');
                    testUser['_id'] = response.body['_id'];
                    done();
                })
        });

        it ('Logs in with the newly created user', (done) => {
            superAgent.post('http://localhost:8000/user/login')
                .set('origin', whitListedUrl)
                .send({
                    "password" : "delete",
                    "eMail" : "test.user@delete.me"
                })
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(200);
                    expect(response.body).to.have.property('_id');
                    expect(response.body).to.have.property('firstName');
                    expect(response.body.firstName).to.eql('test');
                    expect(response.body).to.have.property('lastName');
                    expect(response.body.lastName).to.eql('user');
                    expect(response.body).to.have.property('password');
                    expect(response.body).to.have.property('isAdmin');
                    expect(response.body.isAdmin).to.eql(true);
                    expect(response.body).to.have.property('eMail');
                    expect(response.body.eMail).to.eql('test.user@delete.me');
                    done();
                })
        });

        it ('Fails to log in with the newly created user with wrong password', (done) => {
            superAgent.post('http://localhost:8000/user/login')
                .set('origin', whitListedUrl)
                .send({
                    "password" : "delete123",
                    "eMail" : "test.user@delete.me"
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(500);
                    expect(response.text).to.eql('Wrong credentials.');
                    done();
                })
        });

        it ('Fails to log in with the newly created user with wrong eMail', (done) => {
            superAgent.post('http://localhost:8000/user/login')
                .set('origin', whitListedUrl)
                .send({
                    "password" : "delete",
                    "eMail" : "test.user@delete.me123"
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(500);
                    expect(response.text).to.eql('Wrong credentials.');
                    done();
                })
        });

        it ('Returns 500 trying to overwrite data', (done) => {
            superAgent.post('http://localhost:8000/user')
                .set('origin', whitListedUrl)
                .send(overwriteUser)
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.text).to.eql('"Key duplication detected"');
                    done();
                })
        });
    });

    describe ('PUT /user', () => {
        it ('Returns 400 with empty data', (done) => {
            superAgent.put('http://localhost:8000/user/'  + testUser['_id'])
                .set('origin', whitListedUrl)
                .send({
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(400);
                    expect(response.text).to.eql('Insufficient data.');
                    done();
                });
        });

        it ('Returns 500 with empty data', (done) => {
            superAgent.put('http://localhost:8000/user/'  + testUser['_id'])
                .set('origin', whitListedUrl)
                .send({
                    'test': 'test'
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(500);
                    expect(response.text).to.eql('"Attempted to update a non existeny property."');
                    done();
                });
        });

        it ('Returns 200 with valid data', (done) => {
            superAgent.put('http://localhost:8000/user/' + testUser['_id'])
                .set('origin', whitListedUrl)
                .send({
                    firstName: 'test1',
                    lastName: 'test1user'
                })
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(200);
                    expect(response.body).to.have.property('_id');
                    expect(response.body).to.have.property('firstName');
                    expect(response.body.firstName).to.eql('test1');
                    expect(response.body).to.have.property('lastName');
                    expect(response.body.lastName).to.eql('test1user');
                    expect(response.body).to.have.property('password');
                    expect(response.body).to.have.property('isAdmin');
                    expect(response.body.isAdmin).to.eql(true);
                    expect(response.body).to.have.property('eMail');
                    expect(response.body.eMail).to.eql('test.user@delete.me');
                    testUser['_id'] = response.body['_id'];
                    done();
                })
        });
    });

    describe ('DELETE /user', () => {
        it ('Returns 200 with valid id', (done) => {
            superAgent.delete('http://localhost:8000/user/' + testUser['_id'])
                .set('origin', whitListedUrl)
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(200);
                    done();
                })
        });
    });
});