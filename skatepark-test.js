var assert = require('chai').assert;
var SkatePark = require('./skatepark.js');
var Skater = require('./skater.js');


describe('Skate Park', function() {
  it('should be a function', function() {
    assert.isFunction(SkatePark);
  });
})