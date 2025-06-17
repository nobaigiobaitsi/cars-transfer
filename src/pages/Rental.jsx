import React from 'react';
import './rental.css';

const Rental = () => {
  return (
    <div className="rental-page">
      <div className="rental-overlay">
        <h1 className="rental-title">Motorhome Rental in Greece</h1>

        <p className="rental-subtitle">
          Discover Greece in total freedom with our fully-equipped motorhome. Perfect for groups, couples, families, or solo travelers.
        </p>
        <p className="rental-subtitle">Talk to us and we can help you organise the perfect trip anywhere on Greece. We will give you suggestions and ideas that will assist you in discovering the charms of our beautiful country.</p>

        <div className="rental-item">
          <img src="../images/Motorhome-van.png" alt="Motorhome Campervan" className="rental-image" />
          <div className="rental-item-overlay">
            <h2 className="rental-item-title">Your Home on the Road</h2>
            <p className="rental-item-description">
              Enjoy comfort and flexibility with a spacious motorhome that includes sleeping space for 4, kitchen, bathroom, and more.
            </p>
          </div>
        </div>

        <h2 className="rental-subtitle">What's Included</h2>
        <ul className="rental-features">
          <li>Sleeps up to 4 people</li>
          <li>Fully-equipped kitchenette</li>
          <li>Bathroom with shower</li>
          <li>Air conditioning & heating</li>
        </ul>

        <div className="fleet-cta">
          <p>
            Ready to plan your trip? Contact us today and let’s make your dream road trip through Greece a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rental;
