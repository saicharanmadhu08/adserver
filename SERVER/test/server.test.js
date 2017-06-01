const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../src/server');
const should = chai.should();
const Ads = require('../src/models/ads');
chai.use(chaiHttp);

before((done) => {
    Ads.remove({}).then(() => done());
});

describe('Posts', function () {



    it('POST/ ad', (done) => {
        chai.request(app)
            .post('/ad')
            .send({ "partner_id": "5", "duration": 500, "ad_content": "This is sds,ksduhfkjdsh,jbflkfn Add" })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('partner_id');
                res.body.should.have.property('duration');
                res.body.should.have.property('ad_content');
                res.body.partner_id.should.equal('5');
                res.body.duration.should.equal(500);
                res.body.ad_content.should.equal('This is sds,ksduhfkjdsh,jbflkfn Add');
                done();
            });

    });

    it('POST/ ad duplicate', (done) => {
        chai.request(app)
            .post('/ad')
            .send({ "partner_id": "5", "duration": 500, "ad_content": "This is sds,ksduhfkjdsh,jbflkfn Add" })
            .end(function (err, res) {
                console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.not.have.property('partner_id');
                res.body.should.not.have.property('duration');
                res.body.should.not.have.property('ad_content');

                done();
            });

    });

    it('POST/ ad/:partner_id', (done) => {
        chai.request(app)
            .post('/ad/5')
            .send({ "partner_id": "5", "duration": 500, "ad_content": "This is sds,ksduhfkjdsh,jbflkfn Add" })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('partner_id');
                res.body.should.have.property('duration');
                res.body.should.have.property('ad_content');
                res.body.partner_id.should.equal('5');
                res.body.duration.should.equal(500);
                res.body.ad_content.should.equal('This is sds,ksduhfkjdsh,jbflkfn Add');
                done();
            });

    });
});



describe('Gets', function () {
    it('Get /ad/:partner_ID', (done) => {

        chai.request(app)
            .get('/ad/5')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('array');
                res.body[0].should.have.property('partner_id');
                res.body[0].should.have.property('duration');
                res.body[0].should.have.property('ad_content');
                res.body[0].partner_id.should.equal('5');
                res.body[0].duration.should.equal(500);
                res.body[0].ad_content.should.equal('This is sds,ksduhfkjdsh,jbflkfn Add');
                done();
            });

    });

});





