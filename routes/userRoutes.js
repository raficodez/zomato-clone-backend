const express = require('express');
const router = express.Router();

const { registerUser, loginUser, userProfile } = require('../controllers/userController');
const isLoggedIn = require('../middlewares/authMiddleware')


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', isLoggedIn, userProfile)


module.exports = router;