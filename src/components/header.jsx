import React from "react";
import "./Header.css";
import logo from "../images/main-logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={logo} alt="Greek End Transfers Logo" className="logo" />
        <h1 className="site-title">Greek End Transfers</h1>
      </div>
    </header>
  );
};

export default Header;