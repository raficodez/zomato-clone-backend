const userModel = require("../models/User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        bcrypt.genSalt(10, (err, salt) => {

            bcrypt.hash(password, salt, async (err, hash) => {

                const user = await userModel.create({
                    name,
                    email,
                    password: hash,
                });

                const token = jwt.sign(
                    { id: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: '7d' }
                );
                res.status(201).json({
                    success: true,
                    token
                })
            })
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};
const loginUser = async (req, res) => {
    try {

        let { email, password } = req.body;
        let user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not found"
            })
        }

        bcrypt.compare(password, user.password, (err, result) => {

            if (!result) {

                return res.status(400).json({
                    success: false,
                    message: "Invalid credentials"
                });

            };

            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.status(200).json({
                success: true,
                token
            })
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const userProfile = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected Profile Route",
        user: req.user
    })
}
module.exports = {
    registerUser,
    loginUser,
    userProfile
}