import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import PremiumTravelExperience from '../components/PremiumTravelExperience';
import Footer from '../components/Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [cars, setCars] = useState([]); // State to store cars
  const [error, setError] = useState(null); // State to handle errors

  // Fetching cars from the backend API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cars');
        setCars(response.data); // Set cars from response
      } catch (err) {
        console.error(err);
        setError('Failed to fetch cars. Please try again later.');
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Available Cars Section */}
      <div className="available-cars">
        <h1>Available Cars</h1>
        <p className="home-description">
          Choose from our range of luxury vehicles, operated by professional chauffeurs.
        </p>
        {error && <p className="error-message">{error}</p>} {/* Display error if any */}
        <div className="car-list">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* View All Vehicles Button */}
        <div className="view-all-button-container">
          <Link to="/vehicles" className="view-all-button">
            View All Vehicles <span className="arrow">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Premium Travel Experience Section */}
      <PremiumTravelExperience />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;