const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const FishingHole = new Schema({
  name: String,
  bestFish: String,
  image: String,
})

module.exports = mongoose.model('FishingHole', FishingHole)