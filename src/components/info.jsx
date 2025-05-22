import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info-overlay">
        <h2 className="info-title">Why Choose Us</h2>
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
          <li>Motorhome (camper van) rental for those who want to explore Greece with freedom and comfort, ideal for road trips and vacations in style.</li>
          <li>Economy & VIP transfers, with state-of-the-art minivans for families, groups or small groups looking for comfort and reliability.</li>
          <li>VIP Transfers with Luxury Cars, for demanding clients looking for top-notch services, discretion and luxury.</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;