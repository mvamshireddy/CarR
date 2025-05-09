const Car = require('../models/carModel');

// Fetch all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars', error });
  }
};

// Add a new car
const addCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: 'Error adding car', error });
  }
};

// Update car details
const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ message: 'Error updating car', error });
  }
};

// Delete a car
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting car', error });
  }
};

module.exports = { getAllCars, addCar, updateCar, deleteCar };