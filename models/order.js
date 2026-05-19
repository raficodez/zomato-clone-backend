const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    items: [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'food'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Preparing'
    }
}, { timestamps: true });

module.exports = mongoose.model('order',orderSchema)