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
            <p className="fleet-description">Whether you want to move quickly through the city, go to the airport or embark on a road trip, explore Greece and travel, we have you covered.</p>
            <p className="fleet-description">Choose the perfect vehicle for your journey:</p>
            <div className="fleet-overlay">
                <div className="fleet-item" id="toyota-proace">
                    <img src={logo1} alt="Toyota Proace" className="fleet-image"/>
                    <div className="fleet-item-overlay">
                    <h2 className="fleet-item-title">Toyota Proace</h2>
                    <p className="fleet-item-description">Description of Toyota Proace.</p>
                    </div>
                </div>
                <div className="fleet-item" id="peugeot-508">
                    <img src={logo2} alt="Peugeot 508" className="fleet-image"/>
                    <div className="fleet-item-overlay">
                    <h2 className="fleet-item-title">Peugeot 508</h2>
                    <p className="fleet-item-description">Description of Peugeot 508.</p>
                    </div>
                </div>
                <div className="fleet-item" id="motorhome-van">
                    <img src={logo3} alt="Motorhome Van" className="fleet-image"/>
                    <div className="fleet-item-overlay">
                    <h2 className="fleet-item-title">Motorhome Van</h2>
                    <p className="fleet-item-description">Description of Motorhome Van.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Fleet;