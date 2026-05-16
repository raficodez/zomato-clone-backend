const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/userController');
const isLoggedIn = require('../middlewares/authMiddleware')


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', isLoggedIn, (req, res) => {

    res.status(200).json({
        success: true,
        message: "Protected Profile Route",
        user: req.user
    })
})


module.exports = router;