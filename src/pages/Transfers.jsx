import "./transfers.css";

const Transfers = () => {

  const pricing = [
    { from: 'Athens Airport', to: 'City Center', price: '€40' },
    { from: 'City Center', to: 'Piraeus Port', price: '€30' },
    { from: 'Airport', to: 'Cape Sounion', price: '€70' },
  ];

  return (
    <main className="transfers-container">


      <section className="transfers-pricing">
        <h2>Pricing List</h2>
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((item, idx) => (
              <tr key={idx}>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Transfers;



{/*      <h1>Transfers</h1>
      <section className="transfers-intro">
        <p>
          We offer professional, comfortable, and timely transfers across Athens and nearby areas.
          Our fleet is equipped to ensure a safe and relaxing journey, whether you're heading to the airport, port, or a hotel.
        </p>
      </section>

      <section className="transfers-destinations">
        <h2>Popular Destinations</h2>
        <ul>
          {destinations.map((place, idx) => (
            <li key={idx}>{place}</li>
          ))}
        </ul>
      </section>*/}

{/*const destinations = [
    'Athens Airport',
    'Piraeus Port',
    'City Center Hotels',
    'Rafina Port',
    'Cape Sounion',
  ]; */}