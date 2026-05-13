const registerUser = (req, res) => {
    let { name, email } = req.body;

    res.json({
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