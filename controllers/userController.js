const registerUser = (req, res) => {
    let { name, email } = req.body;

    res.status(201).json({
        success: "true",
        message: "User registered successfully",
        user: {
            name,
            email
        }
    });
};

module.exports = {
    registerUser
}