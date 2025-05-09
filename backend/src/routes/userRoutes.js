const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserDetails } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

// Routes for Users
router.post('/register', registerUser); // Public
router.post('/login', loginUser); // Public
router.get('/:id', protect, getUserDetails); // Protected (logged-in users only)

module.exports = router;