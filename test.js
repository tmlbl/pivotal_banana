var expect = require('chai').expect,
  Banana = require('./banana.js');

describe('Banana', function () {
  'use strict';
  var banana;
  beforeEach(function () {
    banana = new Banana();
  });
  it('should exist', function () {
    expect(banana).to.be.an('object');
  });
  it("should be Tyler's", function () {
    expect(banana.getOwner()).to.equal('Tyler');
  });
  it('should be stolen', function () {
    banana.steal();
    expect(banana.getOwner()).to.equal('Tim');
  });
  // Thank you
});
