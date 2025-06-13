import { Link } from "react-router-dom";
import "./info.css";

const Info = () => {
  return (
    <div className="info" id="info">
      <div className="info-overlay">
        <h2 className="info-title">Welcome to Greekend Transfers</h2>
        <p className="info-description">
          At Greekend Transfers, we’re more than just a car rental service — we’re your trusted travel partner.
          Whether you're heading to a business meeting or exploring the city, our fleet is always clean, modern, and reliable.
          Enjoy hassle-free bookings, punctual transfers, and customer support that actually cares.
          With competitive rates and a friendly team, we make sure every journey starts and ends with satisfaction.
        </p>
        <p className="info-list">
          Our services include:
        </p>
        <ul className="info-highlights">
          <li><strong>Transfers</strong> - Economy & VIP transfers, with a state-of-the-art minivan or a classy and powerful car for families, individuals or groups looking for comfort and reliability.</li>
          <li><strong>Tours</strong> - Customized tours to explore the beauty of Greece, with knowledgeable guides and flexible itineraries. Explore Greece and discover its history and charm.</li>
          <li><strong>Rental</strong> - Motorhome (camper van) rental for those who want to explore Greece with freedom and comfort, ideal for road trips and vacations in style.</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;