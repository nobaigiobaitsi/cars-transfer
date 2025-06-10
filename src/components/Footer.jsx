import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section company-info">
          <h3>Greekend Transfers</h3>
          <p>Reliable transfers & rentals across Greece. Travel smart, travel Greekend.</p>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Fleet">Fleet</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact</h4>
          <p>Phones: 6972500117, 6940514882</p>
          <p>Email: greatkapiris@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Greekend Transfers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
