const restaurantModel = require("../models/restaurant")

const addRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantModel.create(req.body);

        res.status(201).json({
            success: true,
            restaurant
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find();

        res.status(200).json({
            success: true,
            restaurants
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addRestaurant,
    getRestaurants
};