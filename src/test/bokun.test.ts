import * as expect from 'expect.js';
import * as superAgent from 'superagent';
import 'mocha'

describe ('/Bokun API endpoint', () => {

    let whitListedUrl: string;

    before('Setup test data and create authorized origin', (done) => {
        whitListedUrl = 'https://myvisitemail.herokuapp.com/';
        done();
    });

    describe ('GET /product-list', () => {
        it ('Returns 401 when request is made from an unauthorized origin', (done) => {
            superAgent.get('https://myvisitemail.herokuapp.com/bokun/product-list')
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(401);
                    expect(response.text).to.eql('Authorization failure');
                    done();
                });
        });

        it ('Returns 200 when request is made from a whiteListed origin', (done) => {
            superAgent.get('https://myvisitemail.herokuapp.com/bokun/product-list')
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

    describe ('GET /product-list/items/slug/:listSlug', () => {
        it ('Returns 401 when request is made from an unauthorized origin', (done) => {
            superAgent.get('https://myvisitemail.herokuapp.com/bokun//product-list/items/slug/test')
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(401);
                    expect(response.text).to.eql('Authorization failure');
                    done();
                });
        });
    });

    describe ('GET /product-list/items/:listId', () => {
        it ('Returns 401 when request is made from an unauthorized origin', (done) => {
            superAgent.get('https://myvisitemail.herokuapp.com/bokun//product-list/items/testId')
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.status).to.eql(401);
                    expect(response.text).to.eql('Authorization failure');
                    done();
                });
        });
    });
});