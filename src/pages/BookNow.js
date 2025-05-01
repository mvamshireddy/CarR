import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard"; // Import CarCard component
import "./BookNow.css";

const BookNow = () => {
  const [activeTab, setActiveTab] = useState("vehicle");

  // Vehicle data (same as Vehicles page)
  const allVehicles = [
    {
      id: 1,
      name: "Mercedes S-Class",
      image: "/images/mercedes-s-class.jpg",
      description: "The pinnacle of luxury sedans, offering unmatched comfort for executive travel.",
      price: 120,
      passengers: 3,
      luggage: 2,
      category: "Luxury Sedans",
    },
    {
      id: 2,
      name: "BMW 7 Series",
      image: "/images/bmw-7-series.jpg",
      description: "Blend of performance and luxury with spacious interior for business or leisure.",
      price: 110,
      passengers: 3,
      luggage: 2,
      category: "Luxury Sedans",
    },
    {
      id: 3,
      name: "Cadillac Escalade",
      image: "/images/cadillac-escalade.jpg",
      description: "Spacious luxury SUV perfect for group travel with ample luggage space.",
      price: 150,
      passengers: 6,
      luggage: 4,
      category: "Premium SUVs",
    },
    {
      id: 4,
      name: "Range Rover Autobiography",
      image: "/images/range-rover.jpg",
      description: "The epitome of luxury SUVs, combining opulence with off-road capability.",
      price: 140,
      passengers: 4,
      luggage: 3,
      category: "Premium SUVs",
    },
    {
      id: 5,
      name: "Mercedes V-Class",
      image: "/images/mercedes-v-class.jpg",
      description: "Spacious luxury van for group travel with exceptional comfort.",
      price: 160,
      passengers: 5,
      luggage: 5,
      category: "Luxury Vans",
    },
    {
      id: 6,
      name: "Rolls-Royce Phantom",
      image: "/images/rolls-royce.jpg",
      description: "The ultimate symbol of prestige and luxury for special occasions.",
      price: 300,
      passengers: 3,
      luggage: 2,
      category: "Ultra Luxury",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="book-now-page">
        {/* Header Section */}
        <header className="book-now-header">
          <h1>Book Your Ride</h1>
          <p>Complete the booking process below to secure your luxury transportation.</p>
        </header>

        {/* Tabs Navigation */}
        <div className="book-now-tabs">
          <button
            className={`tab ${activeTab === "vehicle" ? "active" : ""}`}
            onClick={() => handleTabClick("vehicle")}
          >
            Vehicle
          </button>
          <button
            className={`tab ${activeTab === "details" ? "active" : ""}`}
            onClick={() => handleTabClick("details")}
          >
            Details
          </button>
          <button
            className={`tab ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </button>
          <button
            className={`tab ${activeTab === "payment" ? "active" : ""}`}
            onClick={() => handleTabClick("payment")}
          >
            Payment
          </button>
        </div>

        {/* Content Section */}
        <div className="book-now-content">
          {activeTab === "vehicle" && (
            <div className="vehicle-selection">
              <h2>Select Your Vehicle</h2>
              <p>Choose the luxury vehicle that best suits your needs</p>
              <div className="vehicles-list">
                {allVehicles.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              {/* Bottom Buttons */}
              <div className="action-buttons">
                <button className="cancel-button">Cancel</button>
                <button className="continue-button">Continue →</button>
              </div>
            </div>
          )}
          {activeTab === "details" && <div>Details Content</div>}
          {activeTab === "contact" && <div>Contact Content</div>}
          {activeTab === "payment" && <div>Payment Content</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookNow;