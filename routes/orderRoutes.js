const express = require("express");
const { placeOrder, getOrders } = require("../controllers/orderController");
const isLoggedIn = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/place", isLoggedIn, placeOrder)
router.get("/my-orders", isLoggedIn, getOrders)

module.exports = router;