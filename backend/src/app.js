const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api/cars', require('./routes/carRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));

// Example Test Function
const Car = require('./models/carModel');
const User = require('./models/userModel');
const Booking = require('./models/bookingModel');

const testModels = async () => {
  try {
    // Create a sample car
    const car = new Car({
      name: 'Mercedes S-Class',
      image: '/assets/images/mercedes.png',
      description: 'Luxury sedan with premium features.',
      price: 120,
      passengers: 4,
      luggage: 2,
      category: 'Luxury Sedans',
    });
    await car.save();

    // Create a sample user
    const user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    });
    await user.save();

    // Create a sample booking
    const booking = new Booking({
      user: user._id,
      car: car._id,
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 3600000), // 1 hour later
      pickupLocation: 'New York City',
      dropoffLocation: 'JFK Airport',
      totalCost: 120,
      referenceId: 'REF123456',
    });
    await booking.save();

    console.log('Sample data created successfully!');
  } catch (error) {
    console.error('Error creating sample data:', error);
  }
};

// Run the testModels function
///testModels();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;