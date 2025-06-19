import React from 'react';
import './rental.css';
import logo1 from '../images/Motorhome-van.png';

const Rental = () => {
  return (
    <div className="rental-page">
      <div className="rental-top">
          <div className="rental-overlay">
            <h1 className="rental-title">Motorhome Rental in Greece</h1>
            <p className="rental-subtitle">
              Discover Greece in total freedom with our fully-equipped motorhome. Perfect for groups, couples, families, or solo travelers.
            </p>
            <p className="rental-subtitle">Talk to us and we can help you organise the perfect trip anywhere on Greece. We will give you suggestions and ideas that will assist you in discovering the charms of our beautiful country.</p>
          </div>
        </div>
        <div className="rental-item">
          <img src={logo1} alt="Motorhome Campervan" className="rental-image" />
          <div className="rental-item-overlay">
            <h2 className="rental-item-title">Your Home on the Road</h2>
            <p className="rental-item-description">Based on the Renault Master chassis -known for its reliability and comfortable driving experience- this makes a popular choice for recreational vehicle enthusiasts. The defining feature is the double bed situated above the driver's cab, maximizing space utilization. With that in mind, 6 people can comfortably sleep in. The living space is designed for comfort and relaxation featuring a large table, seating, and ample storage. A kitchen with multiple hob burners, a sink, a refrigerator/freezer, and sufficient counter space for meal preparation. A bathroom with a shower, a toilet, and a sink offer convenience and comfort. Plenty of storage space is available throughout the motorhome, including overhead lockers, drawers, and wardrobe space. To sum up, you will not be uncomfortable since it is spacious and the ride is great thanks to the sophisticated design.</p>
          </div>
        </div>

        <h1 className="rental-subtitle" id='rental-sub-header'><strong>In a few words</strong></h1>
        <ul className="rental-features">
          <li>Sleeps up to 6 people</li>
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
  );
};

export default Rental;
