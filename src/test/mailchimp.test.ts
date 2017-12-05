import * as expect from 'expect.js';
import * as superAgent from 'superagent';
import 'mocha';
import { UserDao } from "../database/user/user.dao";
const dao = new UserDao();
// import {describe, it, timeout} from "mocha-typescript";

describe ('/mailchimp API endpoint', () => {

    let whiteListedUrl: String;

    let testCampaign: Object;

    before('Setup test data and create authorized origin', (done) => {
        whiteListedUrl = 'http://localhost:4200';
        testCampaign = {
            recipients: {
                list_id: '8d998c5b10'
            },
            type: 'regular',
                settings: {
                title: "Mailchimp api test",
                template_id: 1309,
                from_name: 'Jacek',
                reply_to: 'jacek.bednarczyk.softiti@gmail.com',
                subject_line: 'Mailchimp api test'
            }
        };
        done();
    });

    describe ('GET mailchimp/<endpoint>', () => {
        it ('Returns 401 when request is made from an unauthorized origin', (done) => {
            superAgent.get('http://localhost:8000/mailchimp/list')
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(401);
                    expect(response.text).to.eql('Authorization failure');
                    done();
                });
        });

        it ('Returns 200 to /list when request is made from a whiteListed origin', (done) => {
            superAgent.get('http://localhost:8000/mailchimp/list')
                .set('origin', whiteListedUrl)
                .end(function(error, response) {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.not.be.lessThan(0);
                    done();
                });
        });

        it ('Returns 200 to /campaign when request is made from a whiteListed origin', (done) => {
            superAgent.get('http://localhost:8000/mailchimp/campaign')
                .set('origin', whiteListedUrl)
                .end(function(error, response) {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.not.be.lessThan(0);
                    done();
                });
        });

        it ('Returns 200 to /report when request is made from a whiteListed origin', (done) => {
            superAgent.get('http://localhost:8000/mailchimp/campaign')
                .set('origin', whiteListedUrl)
                .end(function(error, response) {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.not.be.lessThan(0);
                    done();
                });
        });
    });

    describe ('POST /mailchimp/campaign', () => {
        it ('Returns 401 when request is made from an unauthorized origin', (done) => {
            superAgent.post('http://localhost:8000/mailchimp/campaign')
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(401);
                    expect(response.text).to.eql('Authorization failure');
                    done();
                });
        });
        // nope
        it ('Returns 400 with empty data', (done) => {
            superAgent.post('http://localhost:8000/mailchimp/campaign')
                .set('origin', whiteListedUrl)
                .send({})
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(400);
                    expect(response.text).to.eql('Insufficient data.');
                    done();
                });
        });

        it ('Returns 500 with empty data', (done) => {
            superAgent.post('http://localhost:8000/mailchimp/campaign')
                .set('origin', whiteListedUrl)
                .send({
                    recipients: {
                        list_id: '8d998c5b10'
                    }
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(500);
                    expect(response.text).to.eql('Campaign is incomplete!');
                    done();
                });
        });

        it ('Returns 200 with valid data', (done) => {
            superAgent.post('http://localhost:8000/mailchimp/campaign')
                .set('origin', whiteListedUrl)
                .send(testCampaign)
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    expect(response.body).to.have.property('id');
                    expect(response.body).to.have.property('settings');
                    expect(response.body.settings).to.be.an('object');
                    expect(response.body.settings).to.have.property('title');
                    expect(response.body.settings.title).to.eql('Mailchimp api test');
                    expect(response.body.settings).to.have.property('template_id');
                    expect(response.body.settings.template_id).to.eql(1309);
                    expect(response.body.settings).to.have.property('from_name');
                    expect(response.body.settings.from_name).to.eql('Jacek');
                    expect(response.body.settings).to.have.property('reply_to');
                    expect(response.body.settings.reply_to).to.eql('jacek.bednarczyk.softiti@gmail.com');
                    expect(response.body.settings).to.have.property('subject_line');
                    expect(response.body.settings.subject_line).to.eql('Mailchimp api test');
                    testCampaign['id'] = response.body['id'];
                    done();
                })
        });
    });

    describe ('Patch /campaign', () => {

        it ('Returns 400 with no id', (done) => {
            superAgent.patch('http://localhost:8000/mailchimp/campaign/')
                .set('origin', whiteListedUrl)
                .send({
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(400);
                    expect(response.text).to.eql('Missing campaignId parameter.');
                    done();
                });
        });

        it ('Returns 400 with empty data', (done) => {
            superAgent.patch('http://localhost:8000/mailchimp/campaign/' + testCampaign['id'])
                .set('origin', whiteListedUrl)
                .send({
                })
                .end((error, response) => {
                    expect(error).to.not.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(400);
                    expect(response.text).to.eql('Insufficient data.');
                    done();
                });
        });

        it ('Returns 200 with valid data', (done) => {
            superAgent.patch('http://localhost:8000/mailchimp/campaign/' + testCampaign['id'])
                .set('origin', whiteListedUrl)
                .send({
                    settings: {
                        title: 'updated title'
                    }
                })
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    expect(response.body).to.have.property('id');
                    expect(response.body).to.have.property('settings');
                    expect(response.body.settings).to.be.an('object');
                    expect(response.body.settings).to.have.property('title');
                    expect(response.body.settings.title).to.eql('updated title');
                    expect(response.body.settings).to.have.property('template_id');
                    expect(response.body.settings.template_id).to.eql(1309);
                    expect(response.body.settings).to.have.property('from_name');
                    expect(response.body.settings.from_name).to.eql('Jacek');
                    expect(response.body.settings).to.have.property('reply_to');
                    expect(response.body.settings.reply_to).to.eql('jacek.bednarczyk.softiti@gmail.com');
                    expect(response.body.settings).to.have.property('subject_line');
                    expect(response.body.settings.subject_line).to.eql('Mailchimp api test');
                    testCampaign['id'] = response.body['id'];
                    done();
                })
        });

        it ('Schedules the newly created campaign', (done) => {
            superAgent.post('http://localhost:8000/mailchimp/campaign/' + testCampaign['id'] + '/schedule')
                .set('origin', whiteListedUrl)
                .send({
                    schedule_time: new Date()
                })
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    done();
                })
        });
    });

    describe ('DELETE /user', () => {
        it ('Returns 200 with valid id', (done) => {
            superAgent.delete('http://localhost:8000/mailchimp/campaign/' + testCampaign['id'])
                .set('origin', whiteListedUrl)
                .end((error, response) => {
                    expect(error).to.eql(null);
                    expect(response).to.not.eql(null);
                    expect(response.statusCode).to.eql(200);
                    done();
                })
        });
    });
});