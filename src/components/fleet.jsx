import "./fleet.css";
import logo from '../images/Peugeot-508.png';
import logo2 from '../images/Toyota-9seater.png';
import logo3 from '../images/Motorhome-van.png';

const Fleet = () => {
  return (
    <div className="fleet" id="fleet">
      <h2 className="fleet-header">Explore Our Premium Fleet</h2>
      <div className="fleet-item">
        <img src={logo} alt="Peugeot 508" className="fleet-image left" />
        <div className="fleet-info">
          <h3>Peugeot 508</h3>
          <p>Comfortable and stylish, perfect for VIP transfers or business travel. Leather interior, AC, Wi-Fi.</p>
        </div>
      </div>
      <div className="fleet-item reverse">
        <img src={logo2} alt="Toyota Proace" className="fleet-image right" />
        <div className="fleet-info">
          <h3>Toyota Proace</h3>
          <p>Spacious and reliable, ideal for families and small groups. Up to 8 (9 with the driver) passengers with ample luggage space.</p>
        </div>
      </div>
      <div className="fleet-item">
        <img src={logo3} alt="Motorhome Camper Van" className="fleet-image left" />
        <div className="fleet-info">
          <h3>Motorhome Camper Van</h3>
          <p>Travel Greece freely with all the comforts of home — beds, kitchenette, and onboard bathroom.</p>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
