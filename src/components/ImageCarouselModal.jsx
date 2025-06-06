import React, { useState } from 'react';
import './ImageCarouselModal.css';

const ImageCarouselModal = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt="Vehicle" className="carousel-image" />
        <button className="close-button" onClick={onClose}>×</button>
        <button className="nav-button left" onClick={prevImage}>‹</button>
        <button className="nav-button right" onClick={nextImage}>›</button>
      </div>
    </div>
  );
};

export default ImageCarouselModal;
