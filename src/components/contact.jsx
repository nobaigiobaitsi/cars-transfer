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
          <li><strong>Phone:</strong> 6972500117, 6940514882</li>
          <li><strong>Email:</strong> greatkapiris@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
