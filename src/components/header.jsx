import "./Header.css";
import logo from "../images/main-logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} alt="Greekend Transfers Logo" className="logo" />
        <div className="title-text">
          <h1 className="site-title">Greekend Transfers</h1>
          <p className="established">est. 2021</p>
        </div>
        <a href="#contact" className="contact-button">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
