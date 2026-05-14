const userModel = require("../models/User")

const registerUser = async (req, res) => {
    try{

        let { name, email, password } = req.body;

        const user = await userModel.create({
            name,
            email,
            password
        });
    
        res.status(201).json({
            success: "true",
            user
        });
    }
    catch(error){

    }
};

module.exports = {
    registerUser
}