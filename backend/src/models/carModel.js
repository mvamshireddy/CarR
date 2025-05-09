const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  price: { type: Number, required: true }, // Price per hour
  passengers: { type: Number, required: true },
  luggage: { type: Number, required: true },
  category: { type: String, required: true }, // E.g., Luxury Sedans, Premium SUVs
  isAvailable: { type: Boolean, default: true }, // Availability status
});

module.exports = mongoose.model('Car', carSchema);