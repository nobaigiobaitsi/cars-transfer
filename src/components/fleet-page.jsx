import "./fleet-page.css";
import React, { useState } from "react";
import ImageCarouselModal from './ImageCarouselModal';
import logo1 from "../images/Toyota-9seater.png";
import logo2 from "../images/Peugeot-508.png";
import logo3 from "../images/Motorhome-van.png";
import peugeot508 from "../images/peugeot508.js";


const Fleet = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    const handleImageClick = (images) => {
        setCurrentImages(images);
        setShowModal(true);
    };
    return (
        <>
        <div className="fleet-page">
            <h1 className="fleet-title">Reliable Car Rentals & Transfer Services in Greece</h1>
            <p className="fleet-description">Looking for the best vehicle rental or private transfer service in Greece? Discover our top-rated fleet — from luxury cars and 9-seater vans to fully equipped motorhomes. Each vehicle is carefully maintained to provide a safe, smooth, and stylish ride for airport transfers, city travel, or road trips across Greece.</p>
            <ul className="fleet-description">In a few words, our fleet offers:
                <li></li>
                <li> Clean & comfortable interiors</li>
                <li> Professional service & flexible bookings</li>
                <li> Perfect for business trips, holidays, and family adventures</li>
            </ul>
            <p className="fleet-description">Browse our fleet below and click on any vehicle to view more photos and details. Book with confidence and travel in style!</p>
            <div className="fleet-overlay">
                <div className="fleet-item" id="toyota-proace">
                    <img src={logo1} alt="Toyota Proace" className="fleet-image"/>
                    <div className="fleet-item-overlay">
                    <h2 className="fleet-item-title">Toyota Proace</h2>
                    <p className="fleet-item-description">Description of Toyota Proace.</p>
                    </div>
                </div>
                <div className="fleet-item" id="peugeot-508">
                    <img src={logo2} alt="Peugeot 508" className="fleet-image"
                    onClick={() => handleImageClick(peugeot508)}/>
                    <div className="fleet-item-overlay">
                    <h2 className="fleet-item-title">Peugeot 508</h2>
                    <p className="fleet-item-description">The Peugeot 508 combines sleek design, advanced technology, and smooth performance — making it an ideal choice for both private transfers and personal rentals. With a spacious, elegant interior and a refined ride, it ensures comfort whether you're navigating city streets or enjoying long-distance travel.</p>
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
        {showModal && (
                <ImageCarouselModal images={currentImages} onClose={() => setShowModal(false)} />
        )}
        </>
    );
}

export default Fleet;