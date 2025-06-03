import { useState } from "react";
import "./Header.css";
import logo from "../images/main-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} alt="Greekend Transfers Logo" className="logo" />
        <div>
          <h1 className="site-title">Greekend Transfers</h1>
          <p className="established">est. 2021</p>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="https://www.greekendtransfers.com" onClick={() => setIsMenuOpen(false)}>Home</a>
      </nav>
    </header>
  );
};

export default Header;
