const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const userController = require('../controllers/userController')
const fishingHoleController = require('../controllers/fishingHoleController')
const gearController = require('../controllers/gearController')

// Application routes
router.get('/', appController.index)

// User routes
router.get('/users', userController.index)

router.get('/users/new', userController.new)

router.post('/users', userController.create)

router.get('/users/:userId', userController.show)

router.delete('/users/:userId', userController.delete)

// Fishing Hole routes
router.get('/fishingHoles', fishingHoleController.index)

router.get('/fishingHoles/new', fishingHoleController.new)

router.post('/fishingHoles', fishingHoleController.create)

router.get('/fishingHoles/:fishingHoleId', fishingHoleController.show)

router.get('/fishingHoles/:fishingHoleId/edit', fishingHoleController.edit)

router.put('/fishingHoles/:fishingHoleId', fishingHoleController.update)

router.delete('/fishingHoles/:fishingHoleId', fishingHoleController.delete)

// Gear routes

router.get('/gear', gearController.index)

router.get('/gear/new', gearController.new)

router.post('/gear/:gearId', gearController.addPet)

router.post('/gear', gearController.create)

router.get('/gear/:gearId', gearController.show)

router.delete('/gear/:gearId', gearController.delete)

module.exports = router