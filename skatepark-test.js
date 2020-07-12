var assert = require('chai').assert;
var SkatePark = require('./skatepark.js');
var Skater = require('./skater.js');


describe('Skate Park', function() {
  it('should be a function', function() {
    assert.isFunction(SkatePark);
  });

  it('should have a name', function() {
    var skatePark1 = new SkatePark('Burnside');
    var skatePark2 = new SkatePark('Woodward')
    assert.equal(skatePark1.name, 'Burnside');
    assert.equal(skatePark2.name, 'Woodward');
  })

  it('should have the year it was built', function() {
    var skatePark1 = new SkatePark('Burnside', 1990);
    var skatePark2 = new SkatePark('Woodward', 1970);
    assert.equal(skatePark1.founded, 1990);
    assert.equal(skatePark2.founded, 1970);
  })

  it('should have a style', function() {
    var skatePark1 = new SkatePark('Burnside', 1990, 'transition');
    var skatePark2 = new SkatePark('Woodward', 1970, 'flow');
    assert.equal(skatePark1.style, 'transition')
    assert.equal(skatePark2.style, 'flow')
  })

  it('should have some unique features', function() {
    var features1 = ['pyramid', 'concrete coping', 'pools']
    var skatePark1 = new SkatePark('Burnside', 1990, 'transition', features1)
    
    var features2 = ['full pipe', 'street course', '11 foot bowls']
    var skatePark2 = new SkatePark('Louisville Extreme Park', 2002, 'flow', features2)

    assert.equal(skatePark1.features, features1)
    assert.equal(skatePark2.features, features2)
  })

  it('should be a public park, unless otherwise noted', function() {
    var skatePark1 = new SkatePark(
      'Louisville Extreme Park', 
      2002, 
      'flow', 
      ['full pipe', 'street course', '11 foot bowls'],
    )

    var skatePark2 = new SkatePark(
      'Curbside', 
      2018, 
      'street', 
      ['indoor', 'staircase', 'quarter pipe'],
      true
    )

    assert.equal(skatePark1.isPrivate, false)
    assert.equal(skatePark2.isPrivate, true)
  })

  it('', function() {

  })
})