const { name } = require("ejs")
const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurant"
    }
}, { timestamps: true });

module.exports = mongoose.model("food", foodSchema)