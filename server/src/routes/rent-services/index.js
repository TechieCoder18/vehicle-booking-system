const express = require('express')
const router = express.Router()

const get_vehicle_type = require('./get-vehicle-type');
const get_vehicle_models = require('./get-vehicle-models');
const confirm_booking = require('./confirm-booking');

router.use('/get-vehicle-type', get_vehicle_type);
router.use('/get-vehicle-models', get_vehicle_models);
router.use('/confirm-booking', confirm_booking);

module.exports = router