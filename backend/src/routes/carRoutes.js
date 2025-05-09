const express = require('express');
const router = express.Router();
const { getAllCars, addCar, updateCar, deleteCar } = require('../controllers/carController');
const { protect, isAdmin } = require('../middlewares/authMiddleware');

// Routes for Cars
router.get('/', getAllCars); // Public
router.post('/', protect, isAdmin, addCar); // Admin only
router.put('/:id', protect, isAdmin, updateCar); // Admin only
router.delete('/:id', protect, isAdmin, deleteCar); // Admin only

module.exports = router;