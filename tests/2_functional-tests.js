const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('/api/translate Translation with text and locale fields', function(done) {
        chai.request(server)
          .post('/api/translate')
          .send({text: 'The brolly in yellow', locale: 'british-to-american'})
          .end(function(err, res){
             assert.equal(res.status, 200);
             assert.equal(res.body.translation, `The <span class="highlight">umbrella</span> in yellow.`);
             done();
          })
    })
    test('/api/translate Translation with text and invalid locale field', function(done) {
        chai.request(server)
          .post('/api/translate')
          .send({text: 'The brolly in yellow', locale: 'spanish-to-american'})
          .end(function(err, res){
             assert.equal(res.status, 200);
             assert.equal(res.body.error, 'Invalid value for locale field');
             done();
          })
    })
    test('/api/translate Translation with missing text field', function(done) {
        chai.request(server)
          .post('/api/translate')
          .send({text: 'The brolly in yellow'})
          .end(function(err, res){
             assert.equal(res.status, 200);
             assert.equal(res.body.error, 'Required field(s) missing');
             done();
          })
    })
    test('/api/translate Translation with missing locale field', function(done) {
        chai.request(server)
          .post('/api/translate')
          .send({locale: 'british-to-american'})
          .end(function(err, res){
             assert.equal(res.status, 200);
             assert.equal(res.body.error, 'Required field(s) missing');
             done();
          })
    })
    test('/api/translate Translation with empty text', function(done) {
        chai.request(server)
          .post('/api/translate')
          .send({text: '', locale: 'british-to-american'})
          .end(function(err, res){
             assert.equal(res.status, 200);
             assert.equal(res.body.error, 'No text to translate');
             done();
          })
    })
    test('/api/translate Translation with text that needs no translation', function(done) {
        chai.request(server)
          .post('/api/translate')
          .send({text: 'No need to translate.', locale: 'british-to-american'})
          .end(function(err, res){
             assert.equal(res.status, 200);
             assert.equal(res.body.translation, "Everything looks good to me!");
             done();
          })
    })
});
