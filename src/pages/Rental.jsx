import React from 'react';
import './rental.css';

const Rental = () => {
  return (
    <main className="rental-container">
      <section className="rental-hero">
        <h1>Explore Greece with Comfort</h1>
        <p>Rent our fully-equipped motorhome and discover the beauty of Greece at your own pace. Whether it's the coast, the mountains, or historic villages — travel your way, in your time.</p>
      </section>

      <section className="rental-features">
        <h2>Motorhome Features</h2>
        <ul>
          <li>Sleeps 5 comfortably</li>
          <li>Fully-equipped kitchen</li>
          <li>Private bathroom with shower</li>
          <li>Air conditioning & heating</li>
        </ul>
      </section>

      <section className="rental-benefits">
        <h2>Why Choose Our Rental?</h2>
        <p>We offer a reliable, clean, and adventure-ready vehicle — perfect for couples, families, or solo travelers who want to explore Greece without the limits of hotels and fixed itineraries.</p>
      </section>

      <section className="rental-cta">
        <h3>Ready to Start Your Journey?</h3>
        <p>Contact us today for availability, pricing, and custom route suggestions.</p>
        <a href="/contact" className="rental-button">Contact Us</a>
      </section>
    </main>
  );
};

export default Rental;
