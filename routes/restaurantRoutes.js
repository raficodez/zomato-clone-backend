const express = require('express');
const router = express.Router();

const { addRestaurant, getRestaurants } = require("../controllers/restaurantControllers")

router.post('/add', addRestaurant)
router.get('/all', getRestaurants)

module.exports = router;