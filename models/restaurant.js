const mongoose = require("mongoose")

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    cuisine: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    deliveryTime: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Restaurant', restaurantSchema)