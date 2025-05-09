const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');
const { protect } = require('../middlewares/authMiddleware');

// Routes for Bookings
router.post('/', protect, createBooking); // Protected (logged-in users only)
router.get('/', protect, getBookings); // Protected (logged-in users only)

module.exports = router;