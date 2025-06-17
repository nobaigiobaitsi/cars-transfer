import React from 'react';
import './rental.css';
import logo1 from '../images/Motorhome-van.png'

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
          <img src={logo1} alt="Motorhome Campervan" className="rental-image" />
          <div className="rental-item-overlay">
            <h2 className="rental-item-title">Your Home on the Road</h2>
            <p className="rental-item-description">
              Enjoy comfort and flexibility with a spacious motorhome that includes sleeping space for 5, kitchen, bathroom, and more.
            </p>
          </div>
        </div>

        <h1 className="rental-subtitle" id='rental-sub-header'><strong>What's Included</strong></h1>
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
