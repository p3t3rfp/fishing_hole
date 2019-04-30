const User = require('../models/User')

const appController = {
    index: (req, res) => {
      res.render('index')
    }
  }
  
  module.exports = appController