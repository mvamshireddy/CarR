const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true }, // Reference to the car
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  totalCost: { type: Number, required: true }, // Total cost of the booking
  referenceId: { type: String, unique: true, required: true }, // Unique booking reference
});

module.exports = mongoose.model('Booking', bookingSchema);