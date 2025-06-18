import { useState } from "react";
import "./Header.css";
import logo from "../images/main-logo.jpg";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo-title">
        <Link to="/">
          <img src={logo} alt="Greekend Transfers Logo" className="logo" />
        </Link>
        <div>
          <Link to="/" className="site-title-link">
          <h1 className="site-title">Greekend Transfers</h1>
          </Link>
          <p className="established">est. 2021</p>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/#info" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/fleet" onClick={() => setIsMenuOpen(false)}>Fleet</Link>
        {/*<Link to="/transfers" onClick={() => setIsMenuOpen(false)}>Transfers</Link>*/}
        <Link to="/rental" onClick={() => setIsMenuOpen(false)}>Rental</Link>
        <Link to="/contactPage" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
