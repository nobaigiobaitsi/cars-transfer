import "./fleet.css";
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';

const Fleet = () => {
  return (
    <div className="fleet">
      <h2 className="fleet-header">Explore Our Premium Fleet</h2>
      <div className="fleet-item">
        <img src={car1} alt="Car 1" className="fleet-image left" />
        <div className="fleet-info">
          <h3>Luxury Sedan</h3>
          <p>Comfortable and stylish, perfect for VIP transfers or business travel. Leather interior, AC, Wi-Fi.</p>
        </div>
      </div>
      <div className="fleet-item reverse">
        <img src={car2} alt="Car 2" className="fleet-image right" />
        <div className="fleet-info">
          <h3>Premium Minivan</h3>
          <p>Spacious and reliable, ideal for families and small groups. Up to 7 passengers with ample luggage space.</p>
        </div>
      </div>
      <div className="fleet-item">
        <img src={car3} alt="Car 3" className="fleet-image left" />
        <div className="fleet-info">
          <h3>Motorhome Camper Van</h3>
          <p>Travel Greece freely with all the comforts of home — beds, kitchenette, and onboard bathroom.</p>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
