const FishingHole = require('../models/FishingHole')

const fishingHoleController = {
  index: (req, res) => {
    FishingHole.find().then(fishingHoles => {
      res.render('fishingHoles/index', {fishingHoles})
    })
  },

  new: (req, res) => {
    res.render('fishingHoles/new')
  },

  create: (req, res) => {
    FishingHole.create(req.body).then(fishingHole => {
      res.redirect(`/fishingHoles`)
    })
  },

  show: (req, res) => {
    FishingHole.findById(req.params.fishingHoleId).then(fishingHole => {
      res.render('fishingHoles/show', {fishingHole})
    })
  },

  edit: (req, res) => {
    FishingHole.findById(req.params.fishingHoleId).then(fishingHole => {
        res.render('fishingHoles/edit', {fishingHole})
    })
  },

  update: (req, res) => {
    FishingHole.findByIdAndUpdate(req.params.fishingHoleId, req.body, {new:true}).then(() => {
        res.redirect(`/fishingHoles/${req.params.fishingHoleId}`)
    })
  },

  delete: (req, res) => {
    FishingHole.findByIdAndDelete(req.params.fishingHoleId).then(() => {
      console.log(`Deleted fishingHole with id of ${req.params.fishingHoleId}`)
      res.redirect('/fishingHoles')
    })
  },
}

module.exports = fishingHoleController