const express = require("express");
const router = express.Router();

const { addFood, getFoods } = require("../controllers/foodControllers")

router.post('/add', addFood);
router.get('/all', getFoods);


module.exports = router;