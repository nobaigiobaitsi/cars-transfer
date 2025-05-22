import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info-overlay">
        <h2 className="info-title">Why Choose Us</h2>
        <p className="info-description">
          At Greek End Transfers, we’re more than just a car rental service — we’re your trusted travel partner. 
          Whether you're heading to a business meeting or exploring the city, our fleet is always clean, modern, and reliable. 
          Enjoy hassle-free bookings, punctual transfers, and customer support that actually cares. 
          With competitive rates and a friendly team, we make sure every journey starts and ends with satisfaction.
        </p>
        <p className="info-list">
          We provide exceptional travel experiences tailored to your needs.
        </p>
        <ul className="info-highlights">
          <li>✔ Reliable fleet of vehicles</li>
          <li>✔ Friendly, professional drivers</li>
          <li>✔ Transparent pricing</li>
          <li>✔ Always on time</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;