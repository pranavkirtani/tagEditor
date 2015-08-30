var assert = require("assert");
var should = require('should');
var superagent = require('superagent');
describe('Tag Test suite', function() {
    var id;
  describe('Tag creation api', function () {
    it('should return 200 after user insertion', function () {
     superagent.post('http://localhost:9000/tab').set('Content-Type', 'application/json').end(function(err, res) {
      assert.ifError(err);
     expect(res.status).to.equal(200);
         id=res._id;
      done();
    });
    });
  });
    
    
    
     describe('Tag updation api', function () {
    it('should return 200 after user updation', function () {
     superagent.put('http://localhost:9000/tab/'+id).set('Content-Type', 'application/json').send({text:"test data"}).end(function(err, res) {
      assert.ifError(err);
     expect(res.status).to.equal(200);
         
      done();
    });
    });
  });
    
    
    
     describe('Tag reading api', function () {
    it('should return 200 after reading', function () {
     superagent.get('http://localhost:9000/tabs').end(function(err, res) {
      assert.ifError(err);
     expect(res.status).to.equal(200);
         
      done();
    });
    });
  });
    
     describe('Tag deletion api', function () {
    it('should return 200 after user deletion', function () {
     superagent.del('http://localhost:9000/tab/'+id).set('Content-Type', 'application/json').end(function(err, res) {
      assert.ifError(err);
     expect(res.status).to.equal(200);
         
      done();
    });
    });
  });
    
    
    
});