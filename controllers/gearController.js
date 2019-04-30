const Gear = require('../models/Gear')

const gearController = {
  index: (req, res) => {
    Gear.find().then(gears => {
      res.render('gears/index', {gears})
    })
  },

  new: (req, res) => {
    res.render('gears/new')
  },

  create: (req, res) => {
    Gear.create(req.body).then(kit => {
      res.redirect(`/gears`)
    })
  },

  delete: (req, res) => {
    Gear.findByIdAndDelete(req.params.gearId).then(() => {
      console.log(`Deleted gear with id of ${req.params.gearId}`)
      res.redirect('/gears')
    })
  },
}

module.exports = gearController