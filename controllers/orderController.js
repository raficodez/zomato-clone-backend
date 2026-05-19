const orderModel = require("../models/order")

const placeOrder = async (req, res) => {
    try {
        const order = await orderModel.create({
            user: req.user._id,
            items: req.body.items,
            totalPrice: req.body.totalPrice
        });

        res.status(201).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await orderModel
            .find({ user: req.user._id })
            .populate('items.food');
        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    placeOrder,
    getOrders
}