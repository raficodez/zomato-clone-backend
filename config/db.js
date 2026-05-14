const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("CONNECTED MONGODB");
    }
    catch (err) {
        console.log(err.message);

    }
}

module.exports = connectDB;