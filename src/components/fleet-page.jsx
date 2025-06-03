import "./fleet-page.css";
import logo1 from "../images/Toyota-9seater.png";
import logo2 from "../images/Peugeot-508.png";
import logo3 from "../images/Motorhome-van.png";

const Fleet = () => {
    return (
        <>
        <div className="fleet-page">
            <h1 className="fleet-title">Our Brilliant Fleet</h1>
            <p className="fleet-description">Explore our diverse range of vehicles, each suited to different needs and preferences. Every vehicle is meticulously maintained and ready for your next adventure.</p>
            <p className="fleet-description">Choose the perfect vehicle for your journey:</p>
            <div className="fleet-grid">
                <div className="fleet-item">
                    <img src={logo1} alt="Toyota Proace" className="fleet-image"/>
                    <h2>Toyota Proace</h2>
                    <p>Description of Toyota Proace.</p>
                </div>
                <div className="fleet-item">
                    <img src={logo2} alt="Peugeot 508" className="fleet-image"/>
                    <h2>Peugeot 508</h2>
                    <p>Description of Peugeot 508.</p>
                </div>
                <div className="fleet-item">
                    <img src={logo3} alt="Motorhome Van" className="fleet-image"/>
                    <h2>Motorhome Van</h2>
                    <p>Description of Motorhome Van.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Fleet;