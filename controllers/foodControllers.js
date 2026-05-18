const foodModel = require('../models/food')

const addFood = async (req, res) => {
    try{
        const food = await foodModel.create(req.body);

        res.status(201).json({
            success : true,
            food
        });
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        });
    };
}

const getFoods = async (req, res) => {
    try{
        const foods = await foodModel.find();

        res.status(200).json({
            success : true,
            foods
        });
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        });
    };
}

module.exports = {
    addFood,
    getFoods
}