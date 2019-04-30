const Gear = require('../models/Gear')

const gearController = {
  index: (req, res) => {
    Gear.find().then(allGear => {
      res.render('gear/index', {allGear})
    })
  },

  new: (req, res) => {
    res.render('gear/new')
  },

  create: (req, res) => {
    Gear.create(req.body).then(gear => {
      res.redirect(`/gear/${gear._id}`)
    })
  },

  show: (req, res) => {
    Gear.findById(req.params.gearId).then(gear => {
      res.render('gear/show', {gear})
    })
  },

  edit: (req, res) => {
    Gear.findById(req.params.gearId).then(gear => {
        res.render('gear/edit', {gear})
    })
  },

  update: (req, res) => {
    Gear.findByIdAndUpdate(req.params.gearId, req.body, {new:true}).then(() => {
        res.redirect(`/${req.params.gearId}`)
    })
  },

  delete: (req, res) => {
    Gear.findByIdAndDelete(req.params.gearId).then(() => {
      console.log(`Deleted gear with id of ${req.params.gearId}`)
      res.redirect('/')
    })
  },
}

module.exports = gearController