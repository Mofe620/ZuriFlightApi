const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/:id', flightController.displayOne)
router.get('/', flightController.displayAll)
router.post('/', flightController.addFlight)
router.put('/:id', flightController.updateFlight)
router.delete('/:id', flightController.deleteFlight)

module.exports = router;

