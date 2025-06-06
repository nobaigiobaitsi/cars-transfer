import React from 'react';
import './ContactPage.css';
{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';*/}


const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-overlay">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          We'd love to hear from you! Reach out to us for bookings, questions, or any custom travel needs.
        </p>

        <ul className="contact-details">
            <li><strong>Email:</strong> greatkapiris@gmail.com</li>
            <li><strong>Phones:</strong> +30 6972500117, +30 6940514882</li>
            <li><strong>Location:</strong> Athens, Greece</li>
            {/*<li>
                <strong>Instagram:</strong>{' '}
                <a href="https://www.instagram.com/greekendtransfers" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} /> @greekendtransfers
                </a>
            </li>*/}
        </ul>

        {/* Space for contact form when cheap clients pay :)*/}
      </div>
    </section>
  );
};

export default ContactPage;
