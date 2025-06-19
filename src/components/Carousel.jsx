import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './carousel.css';
import imagesCarousel from '../images/imagesCarousel'

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        allowTouchMove={false}
        grabCursor={false}
        className="carousel"
      >
        {imagesCarousel.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`carousel-${idx}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
