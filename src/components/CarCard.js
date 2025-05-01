import React from 'react';
import './CarCard.css';
import { FaUser, FaSuitcase } from 'react-icons/fa';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-description">{car.description}</p>
        <div className="car-info">
          <span>
            <FaUser className="icon" /> {car.passengers} Passengers
          </span>
          <span>
            <FaSuitcase className="icon" /> {car.luggage} Luggage
          </span>
        </div>
        <div className="car-footer">
          <div className="car-price">${car.price}/hour</div>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;