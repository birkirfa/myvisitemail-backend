"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expect = require("expect.js");
const superAgent = require("superagent");
require("mocha");
const FormData = require("form-data");
const files_dao_1 = require("../database/files/files.dao");
const files_model_1 = require("../database/files/files.model");
const dao = new files_dao_1.FileDao();
describe('/file API endpoint', () => {
    let whitListedUrl;
    let testUser;
    let overwriteUser;
    let testedFile;
    let testedFileId = '';
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
        testedFile = new FormData();
        testedFile.append('file', 'test');
        testedFile.append('fileType', '5');
        testedFile.append('contentType', 'text/plain');
        done();
    });
    describe('GET /file', () => {
        it('Returns 200 (OK) when request is made from a whiteListed origin', (done) => {
            superAgent.get('https://myvisitemail.herokuapp.com/file')
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
    describe('GET /file/type/:typeId', () => {
        it('Returns 200 (OK) when provided with existing file type', (done) => {
            const type = files_model_1.FileType.TestFile;
            superAgent.get('https://myvisitemail.herokuapp.com/file/type/' + type)
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
    describe('POST /file', () => {
        it('Returns 400 (Bad Request) when request is missing file', (done) => {
            superAgent.post('https://myvisitemail.herokuapp.com/file')
                .set('origin', whitListedUrl)
                .end((error, response) => {
                expect(error).to.not.eql(null);
                expect(response).to.not.eql(null);
                expect(response.status).to.eql(400);
                expect(response.text).to.eql('No file presented in request.');
                done();
            });
        });
        it('Returns 201 (Created) when request is made from a whiteListed origin', (done) => {
            superAgent.post('https://myvisitemail.herokuapp.com/file')
                .set('origin', whitListedUrl)
                // .set('Content-Type', 'application/json')
                .send(testedFile)
                .end((error, response) => {
                expect(error).to.eql(null);
                expect(response).to.not.eql(null);
                expect(response.status).to.eql(201);
                expect(response.body).to.not.eql(null);
                testedFileId = '5a03173c3e9823246894c917'; // get Id from DB
                done();
            });
        });
    });
    describe('PUT /file', () => {
        it('Returns 400 (Bad Request) when request is missing file', (done) => {
            superAgent.put('https://myvisitemail.herokuapp.com/file/')
                .set('origin', whitListedUrl)
                .end((error, response) => {
                expect(error).to.not.eql(null);
                expect(response).to.not.eql(null);
                expect(response.status).to.eql(400);
                done();
            });
        });
        it('Returns 200 (OK) when request is made from a whiteListed origin', (done) => {
            const idToBeUpdated = testedFileId;
            console.log(idToBeUpdated);
            // testedFile.set('file', 'updated test');
            testedFile.append('_id', idToBeUpdated);
            superAgent.put('https://myvisitemail.herokuapp.com/file')
                .send(testedFile)
                .set('origin', whitListedUrl)
                .end((error, response) => {
                expect(error).to.eql(null);
                expect(response).to.not.eql(null);
                expect(response.status).to.eql(200);
                done();
            });
        });
    });
    describe('DELETE /file', () => {
        it('Returns 204 (OK Empty) when request is made from a whiteListed origin', (done) => {
            const idToBeDeleted = testedFileId;
            superAgent.delete('https://myvisitemail.herokuapp.com/file/' + idToBeDeleted)
                .set('origin', whitListedUrl)
                .end((error, response) => {
                expect(error).to.eql(null);
                expect(response).to.not.eql(null);
                expect(response.status).to.eql(204);
                done();
            });
        });
    });
});
//# sourceMappingURL=files.test.js.map