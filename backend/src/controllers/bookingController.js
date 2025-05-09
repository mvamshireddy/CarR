const Booking = require('../models/bookingModel');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Error creating booking', error });
  }
};

// Fetch all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('car');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching bookings', error });
  }
};

module.exports = { createBooking, getBookings };