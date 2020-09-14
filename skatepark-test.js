var assert = require('chai').assert;
var SkatePark = require('./skatepark.js');
var Skater = require('./skater.js');

describe('Skate Park', function() {
  it.skip('should be a function', function() {
    assert.isFunction(SkatePark);
  });

  it.skip('should have a name', function() {
    var skatePark1 = new SkatePark('Burnside');
    var skatePark2 = new SkatePark('Woodward');
    assert.equal(skatePark1.name, 'Burnside');
    assert.equal(skatePark2.name, 'Woodward');
  })

  it.skip('should have the year it was built', function() {
    var skatePark1 = new SkatePark('Burnside', 1990);
    var skatePark2 = new SkatePark('Woodward', 1970);
    assert.equal(skatePark1.yearFounded, 1990);
    assert.equal(skatePark2.yearFounded, 1970);
  })

  it.skip('should have a style', function() {
    var skatePark1 = new SkatePark('Burnside', 1990, 'transition');
    var skatePark2 = new SkatePark('Woodward', 1970, 'flow');

    assert.equal(skatePark1.style, 'transition');
    assert.equal(skatePark2.style, 'flow');
  })

  it.skip('should have some unique features', function() {
    var features1 = ['pyramid', 'concrete coping', 'pools'];
    var skatePark1 = new SkatePark('Burnside', 1990, 'transition', features1);
    
    var features2 = ['full pipe', 'street course', '11 foot bowls'];
    var skatePark2 = new SkatePark('Louisville Extreme Park', 2002, 'flow', features2);

    assert.equal(skatePark1.features, features1);
    assert.equal(skatePark2.features, features2);
  })

  it.skip('should default to being a public park', function() {
    var skatePark1 = new SkatePark(
      'Louisville Extreme Park', 
      2002, 
      'flow', 
      ['full pipe', 'street course', '11 foot bowls']
    );

    var skatePark2 = new SkatePark(
      'Curbside', 
      2018, 
      'street', 
      ['indoor', 'staircase', 'quarter pipe'],
      true
    );

    assert.equal(skatePark1.isPrivate, false);
    assert.equal(skatePark2.isPrivate, true);
  })

  it.skip('should defaut to being free', function() {
    var skatePark1 = new SkatePark(
      'Louisville Extreme Park', 
      2002, 
      'flow', 
      ['full pipe', 'street course', '11 foot bowls'],
    );

    var skatePark2 = new SkatePark(
      'Curbside', 
      2018, 
      'street', 
      ['indoor', 'staircase', 'quarter pipe'],
      true, 
      12
    );

    assert.equal(skatePark1.cost, 0)
    assert.equal(skatePark2.cost, 12)
  });

  // finish skater tests below before completing the rest of the skatepark tests
  
  it.skip('should be able to keep track of its occupants', function() {
    var skatePark = new SkatePark(
      'Major Taylor',
      1999,
      'flow',
      ['pyramid', 'funbox', '4-set staircase'],
    )

    assert.deepEqual(skatePark.occupants, [])
  })

  it.skip('should take payment from the skater only if it is a private park', function() {
    var tricks = {
      kickflip: true,
      treflip: false,
      bigSpin: true
    }
    var skater = new Skater({
      name: 'Scott', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 20
    });

    var skatePark = new SkatePark(
      'Major Taylor',
      1999,
      'flow',
      ['pyramid', 'funbox', '4-set staircase'],
    )

    var skatePark2 = new SkatePark(
      'Curbside', 
      2018, 
      'street', 
      ['indoor', 'staircase', 'quarter pipe'],
      true, 
      12
    );

    assert.equal(skatePark.admit(skater), 'Welcome to the free Major Taylor Skatepark!')
    assert.equal(skater.money, 20)
    assert.deepEqual(skatePark.occupants, [skater])
    
    assert.equal(skatePark2.admit(skater), 'Welcome to Curbside, the cost will be $12.00.')
    assert.equal(skater.money, 8)
    assert.deepEqual(skatePark2.occupants, [skater])
  })

  it.skip('should only admit skaters to a private park if they can pay', function() {
    var skatePark = new SkatePark(
      'Curbside', 
      2018, 
      'street', 
      ['indoor', 'staircase', 'quarter pipe'],
      true, 
      12
    );

    var tricks = {
      kickflip: true,
      treflip: true,
      bigSpin: true
    }

    var skater = new Skater({
      name: 'Dennis', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 10
    });

    var skatePark = new SkatePark(
      'Woodward', 
      2018, 
      'street', 
      ['indoor', 'staircase', 'quarter pipe'],
      true, 
      12
    );

    assert(skatePark.admit(skater), `Sorry, you don't have enough money.`)
  })

  it.skip('should only allow 3 skaters at a time for social distancing', function() {
    var tricks = {
      kickflip: true,
      treflip: true,
      bigSpin: true
    }
    var skater = new Skater({
      name: 'Harriet', 
      skill: 'Advanced', 
      tricks: tricks,
      cash: 52
    });
    var skater2 = new Skater({
      name: 'Eric', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 52
    });
    var skater3 = new Skater({
      name: 'Jack', 
      skill: 'Advanced', 
      tricks: tricks,
      cash: 50
    });
    var skater4 = new Skater({
      name: 'Eliza', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 200
    });

    var skatePark = new SkatePark(
      'Woodward', 
      1970, 
      'Flow', 
      ['indoor', 'Foam Pit', 'Half Pipe'],
      true, 
      50
    );

    skatePark.admit(skater)
    skatePark.admit(skater2)
    skatePark.admit(skater3)
  
    assert.deepEqual(skatePark.occupants, [skater, skater2, skater3])
    assert.equal(skatePark.admit(skater4), 'Sorry, we are at max capacity. Thank you for understanding.')
  })
})

describe('Skater', function() {
  it.skip('should have a name', function() {
    var skater = new Skater({name: 'Scott'});
    var skater2 = new Skater({name: 'Nora'})

    assert.equal(skater.name, 'Scott');
    assert.equal(skater2.name, 'Nora');
  })

  it.skip('should have a skill level', function() {
    var skater = new Skater({name: 'Scott', skill: 'Intermediate'});
    var skater2 = new Skater({name: 'Nora', skill: 'Advanced'});

    assert.equal(skater.skill, 'Intermediate');
    assert.equal(skater2.skill, 'Advanced');
  })

  it.skip('should know some tricks', function() {
    var tricks = {
      kickflip: true,
      treflip: false,
      bigSpin: true
    }
    var skater = new Skater({
      name: 'Scott', 
      skill: 'Intermediate', 
      tricks: tricks
    });

    var tricks2 = {
      kickflip: true,
      treflip: true,
      bigSpin: true
    }
    var skater2 = new Skater({
      name: 'Nora', 
      skill: 'Advanced', 
      tricks: tricks2
    });

    assert.equal(skater.tricks.treflip, false)
    assert.equal(skater2.tricks.treflip, true)
  })

  it.skip('should have some money', function() {
    var tricks = {
      kickflip: true,
      treflip: false,
      bigSpin: true
    }
    var skater = new Skater({
      name: 'Scott', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 20
    });

    var tricks2 = {
      kickflip: true,
      treflip: true,
      bigSpin: true
    }
    var skater2 = new Skater({
      name: 'Asha', 
      skill: 'Advanced', 
      tricks: tricks2,
      cash: 200
    });

    assert.equal(skater.money, 20)
    assert.equal(skater2.money, 200)
  })

  it.skip('should start off with no frustration', function() {
    var tricks = {
      kickflip: true,
      treflip: false,
      bigSpin: true
    }
    var skater = new Skater({
      name: 'Shane', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 20
    });

    assert.equal(skater.frustration, 0)
  })

  it.skip('should get more frustrated when practicing tricks they dont know', function() {
    var tricks = {
      kickflip: true,
      treflip: false,
      bigSpin: false
    }
    var skater = new Skater({
      name: 'Jake', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 20
    });

    skater.practice('treflip')
    skater.practice('kickflip')
    skater.practice('treflip')

    assert.equal(skater.frustration, 2)
  })

  it.skip('should learn a trick after practicing and getting frustrated 3 times', function() {
    var tricks = {
      kickflip: true,
      treflip: false,
      bigSpin: false
    }
    var skater = new Skater({
      name: 'Natalie', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 20
    });

    skater.practice('bigSpin')
    skater.practice('bigSpin')
    assert.equal(skater.frustration, 2)

    assert.equal(skater.practice('bigSpin'), 'I just learned to bigSpin!!!')
    assert.equal(skater.tricks.bigSpin, true)
  })

  it.skip('should lose all frustration after learning a new trick', function() {
    var tricks = {
      kickflip: false,
      treflip: false,
      bigSpin: false
    }
    var skater = new Skater({
      name: 'Lyanna', 
      skill: 'Beginner', 
      tricks: tricks,
      cash: 20
    });

    skater.practice('kickflip')
    skater.practice('kickflip')
    skater.practice('kickflip')

    assert.equal(skater.tricks.kickflip, true)
    assert.equal(skater.frustration, 0)
  })

  it.skip('should be able to learn many tricks  after practicing and getting frustrated 3 times', function() {
    var tricks = {
      kickflip: true,
      treflip: false,
      bigSpin: false
    }
    var skater = new Skater({
      name: 'Natalie', 
      skill: 'Intermediate', 
      tricks: tricks,
      cash: 20
    });

    skater.practice('bigSpin')
    skater.practice('bigSpin')
    assert.equal(skater.frustration, 2)

    assert.equal(skater.practice('bigSpin'), 'I just learned to bigSpin!!!')
    assert.equal(skater.tricks.bigSpin, true)

    skater.practice('treflip')
    skater.practice('treflip')

    assert.equal(skater.practice('treflip'), 'I just learned to treflip!!!')
    assert.equal(skater.tricks.treflip, true) 
  })
})

// Go up and finish remaining SkatePark tests.