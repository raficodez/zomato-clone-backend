const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoute = require('./routes/userRoutes');
const restaurantRoute = require("./routes/restaurantRoutes");
const foodRoute = require("./routes/foodRoutes");
const orderRoute = require("./routes/orderRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/restaurant', restaurantRoute);
app.use('/food', foodRoute);
app.use('/order', orderRoute);

app.get("/", (req, res) => {
    res.send("Zomato Backend Started");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});