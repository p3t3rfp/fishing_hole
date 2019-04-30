const mongoose = require('./connection')
const User = require('../models/User')
const FishingHole = require('../models/FishingHole')
const Gear = require('../models/Gear')

const Felix = new User ({
    name: 'Felix',
    typeOfFishing: 'fly',
})

const Neko = new User ({
    name: 'Neko',
    typeOfFishing: 'bass',
})

const Peter = new User ({
    name: 'Peter',
    typeOfFishing: 'bass',
})

const hole1 = new FishingHole ({
    name: 'Shady Lake',
    bestFish: 'bass',
    image: 'https://soullifecoachblog.files.wordpress.com/2017/07/the-fishing-hole.jpg?w=816',
})

const hole2 = new FishingHole ({
    name: 'Sand Bar',
    bestFish: 'bass',
    image: 'https://s3-media4.fl.yelpcdn.com/bphoto/Jmb9SxNfT1DvWhoYMwkiBg/ls.jpg',
})

const hole3 = new FishingHole ({
    name: 'Silver Lake',
    bestFish: 'bass',
    image: 'https://www.denverpost.com/wp-content/uploads/2016/05/20050504_125339_SP0504_wforkHF.jpg?w=400',
})

const gear1 = new Gear ({
    rod: 'Snatcher 1000',
    bait: 'red wiggler',
    lure: 'spinner',
    lineTest: '10 lbs',
})

const gear2 = new Gear ({
    rod: 'Promaster 1000',
    bait: 'squid',
    lure: 'wiggle tail',
    lineTest: '10 lbs',
})

const gear3 = new Gear ({
    rod: 'Castmaster 1000',
    bait: 'red wiggler',
    lure: 'swivel tail',
    lineTest: '10 lbs',
})

const gear4 = new Gear ({
    rod: 'Castmaster 2000',
    bait: 'stink bait',
    lure: 'spoon spinner',
    lineTest: '10 lbs',
})

User.remove({})
  .then(() => User.create([Felix, Neko, Peter]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

FishingHole.remove({})
  .then(() => FishingHole.create([hole1, hole2, hole3]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

Gear.remove({})
  .then(() => Gear.create([gear1, gear2, gear3, gear4]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));