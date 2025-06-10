import "../pages/fleet-page.css";
import React, { useState } from "react";
import ImageCarouselModal from '../components/ImageCarouselModal.jsx';
import logo1 from "../images/Toyota-9seater.png";
import logo2 from "../images/Peugeot-508.png";
import logo3 from "../images/Motorhome-van.png";
import peugeot508 from "../images/peugeot508.js";
import toyotaProace from "../images/toyotaProace.js";
import camperVan from "../images/camperVan.js";


const Fleet = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);

    const handleImageClick = (images) => {
        setCurrentImages(images);
        setShowModal(true);
    };
    return (
        <>
        <div className="fleet-main-top">
            <h1 className="fleet-title">Explore Greece in Comfort & Style</h1>
            <p className="fleet-subtitle">Modern cars, vans, and motorhomes — perfect for transfers, road trips, and unforgettable holidays.</p>

            <div className="fleet-highlights">
            <div className="highlight-item">
                <p className="highlight-label">Modern & Comfortable</p>
            </div>
            <div className="highlight-item">
                <p className="highlight-label">Professional Drivers</p>
            </div>
            <div className="highlight-item">
                <p className="highlight-label">Travel Ready</p>
            </div>
            </div>

            <p className="fleet-cta">Browse our fleet below and click any vehicle to see more photos & details.</p>
            <div className="fleet-overlay">
                <div className="fleet-item" id="toyota-proace">
                    <img src={logo1} alt="Toyota Proace" className="fleet-image"
                    onClick={() => handleImageClick(toyotaProace)}/>
                    <div className="fleet-item-overlay">
                    <h2 className="fleet-item-title">Toyota Proace</h2>
                    <p className="fleet-item-description">Travel together in our spacious Toyota Proace. With seating for up to 8 passengers and generous room for luggage, it's the perfect choice for families and groups looking for a comfortable and seamless transfer.</p>
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
                    <img src={logo3} alt="Motorhome Van" className="fleet-image"
                    onClick={() => handleImageClick(camperVan)}/>
                    <div className="fleet-item-overlay">
                    <h2 className="fleet-item-title">Renault Kentucky Motorhome</h2>
                    <p className="fleet-item-description">Embrace the freedom of the open road in our classic Renault Kentucky. Featuring the iconic over-cab sleeping area for a cozy and memorable stay, this motorhome is your all-in-one solution for transport and accommodation. Perfect for creating unforgettable travel memories.</p>
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