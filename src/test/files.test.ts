import * as expect from 'expect.js';
import * as superAgent from 'superagent';
import 'mocha'
import { FileDao } from "../database/files/filesDao";
const dao = new FileDao();

describe ('/file API endpoint', () => {

    let whitListedUrl: String;

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
    
    describe ('GET /file', () => {
        it ('Returns 200 when request is made from a whiteListed origin', (done) => {
            superAgent.get('http://localhost:8000/file')
                .set('origin', whitListedUrl)
                .end(function(error, response) {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.be.greaterThan(0);
                    done();
                });
        });
    });
});