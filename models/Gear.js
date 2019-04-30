const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Gear = new Schema({
  rod: String,
  bait: String,
  lure: String,
  lineTest: String,
})

module.exports = mongoose.model('Gear', Gear)