/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import should from 'should';
import app from '../src/app.js';
import request from 'supertest';


let token = '';

const loginDetails = {
    'password': '123456',
    'userName': 'Greg Izuka'
};

describe('API Test for Login', () => {

    it('should ensure login works well', (done) => {

        request(app).
            post('/login').
            set('Connection', 'keep alive').
            set('Content-Type', 'application/json').
            send(loginDetails).
            expect(200).
            end((err, res) => {

                if (err) {

                    done(err);

                }
                res.body.should.have.property('status', 'ok');
                res.body.should.have.property('token');

            });
        done();

    });
    afterEach('close open connections', (done) => {

        done();

    });

});

describe('Test for PUT request to /patch and POST request to /resize', () => {

    it('Generates token', (done) => {

        request(app).
            post('/login').
            set('Content-Type', 'application/json').
            send(loginDetails).
            expect(200).
            end((err, res) => {

                if (err) {

                    done(err);

                }
                res.body.should.have.property('token');
                token = res.body.token;
                done();

            });

    });
    const document = {'name': 'Sammy',
        'sport': 'soccer'};
    const patch = [
        {'op': 'replace',
            'path': '/name',
            'value': 'George'}
    ];
    it('ensure the patch request is successful', (done) => {

        request(app).
            put('/patch').
            set({'Authorization': `Bearer ${token}`}).
            set('Content-Type', 'application/json').
            send({document,
                'thePatch': patch}).
            end((err, res) => {

                if (err) {

                    done(err);

                }
                res.body.should.have.property('data');
                res.body.data.should.have.property('name', 'George');

            });
        done();

    });
    it('ensure the resize request is successful', (done) => {

        request(app).
            post('/resize').
            set({'Authorization': `Bearer ${token}`}).
            set('Content-Type', 'application/json').
            send({'url': 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg'}).
            end((err, res) => {

                if (err) {

                    done(err);

                }
                res.body.should.have.property('status', 'ok');
                res.body.should.have.property('message', 'Image successfully resized');

            });
        done();

    });

});