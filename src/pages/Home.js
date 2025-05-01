import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import PremiumTravelExperience from '../components/PremiumTravelExperience';
import Footer from '../components/Footer'; // Import Footer
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [cars, setCars] = useState([]);

  // Fetching cars (you can replace this with an API call later)
  useEffect(() => {
    const fetchCars = async () => {
      const dummyCars = [
        {
          id: 1,
          name: 'Mercedes S-Class',
          description: 'The pinnacle of luxury sedans, offering unmatched comfort for executive travel.',
          passengers: 3,
          luggage: 2,
          price: 120,
          image: 'https://via.placeholder.com/350x200?text=Mercedes+S-Class',
        },
        {
          id: 2,
          name: 'BMW 7 Series',
          description: 'Blend of performance and luxury with spacious interior for business or leisure.',
          passengers: 3,
          luggage: 2,
          price: 110,
          image: 'https://via.placeholder.com/350x200?text=BMW+7+Series',
        },
        {
          id: 3,
          name: 'Cadillac Escalade',
          description: 'Spacious luxury SUV perfect for group travel with ample luggage space.',
          passengers: 6,
          luggage: 4,
          price: 150,
          image: 'https://via.placeholder.com/350x200?text=Cadillac+Escalade',
        },
      ];
      setCars(dummyCars);
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