import "./fleet.css";

const Fleet = () => {
  return (
    <div className="fleet">
      <h2>Our Fleet</h2>
      <p>We offer a wide range of vehicles to suit your needs, from luxury sedans to spacious vans.</p>
      <div className="fleet-cards">
        <div className="card">
          <img src="car1.jpg" alt="Car 1" />
          <h3>Luxury Sedan</h3>
          <p>Comfortable and stylish for all occasions.</p>
        </div>
        <div className="card">
          <img src="car2.jpg" alt="Car 2" />
          <h3>Spacious Van</h3>
          <p>Perfect for groups and families.</p>
        </div>
        <div className="card">
          <img src="car3.jpg" alt="Car 3" />
          <h3>SUV</h3>
          <p>Ideal for off-road adventures.</p>
        </div>
      </div>
    </div>
  );
}

export default Fleet;