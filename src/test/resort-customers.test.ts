import * as expect from 'expect.js';
import * as superAgent from 'superagent';
import 'mocha';

describe('/resort customers API endpoint', () => {
    let whitListedUrl: string;
    let testUser: any;
    let overwriteUser;

    before('Setup test data and create authorized origin', (done) => {
        whitListedUrl = 'http://localhost:4200';
        testUser = {
            firstName: 'test',
            lastName: 'user',
            password: 'delete',
            isAdmin: true,
            eMail: 'test.user@delete.me',
        };
        overwriteUser = {
            firstName: 'test',
            lastName: 'user',
            password: 'delete',
            isAdmin: true,
            eMail: 'test.user@delete.me',
        };

        done();
    });

    describe('GET /resort-customer/all', () => {
        it('Returns 200 (OK) when request is made from a whiteListed origin', (done) => {
            superAgent.get('http://localhost:8000/resort-customer/all')
                .set('origin', whitListedUrl)
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(200);
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.be.greaterThan(0);
                    done();
                });
        });
    });

    describe('GET /resort-customer/detail/:resortId', () => {
        it('Returns 400 when id is not provided', (done) => {
            superAgent.get('http://localhost:8000/resort-customer/detail')
                .set('origin', whitListedUrl)
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(400);
                    expect(response.text).to.eql('Resort id missing!');
                    done();
                });
        });

        it('Returns 200 (OK) when provided with existing resort id', (done) => {
            superAgent.get('http://localhost:8000/resort-customer/detail/1')
                .set('origin', whitListedUrl)
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(200);
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.be.greaterThan(0);
                    done();
                });
        });
    });
});
