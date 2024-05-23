const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { getCars, getSingleCar, storeCar } = require('../controllers/car.controller');

router.get('/', getCars);
router.get('/:id', getSingleCar);
router.post('/add-car', storeCar);

module.exports = router;