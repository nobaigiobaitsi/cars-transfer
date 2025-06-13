import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id='contact'>
      <div className="contact-overlay">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          We’re here to help! Reach out anytime, and we’ll get back to you as soon as possible.
        </p>
        <ul className="contact-info">
          <li><strong>Phones:</strong> +30 6972500117, +30 6940514882</li>
          <li><strong>Email:</strong> greatkapiris@gmail.com</li>
          <li>
            <strong>Instagram:</strong>
            <a href="https://www.instagram.com/greekendtranfers_?igsh=MXM2eG1hdHAzbjdzYg==" target="_blank" rel="noopener noreferrer">
                    @greekendtransfers
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
