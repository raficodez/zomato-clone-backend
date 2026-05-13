const express = require("express");
const app = express();

const userRoute = require('./routes/userRoutes')

app.use(express.json());

app.use('/user', userRoute)

app.get("/", (req, res) => {
    res.send("Zomato Backend Started");
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})