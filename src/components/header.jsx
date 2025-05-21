import React from "react";
import './header.css'
import logo from "../images/header-logo.png";


function Header() {
  return (
    <>
        <header>
            <img src={logo} alt="Company Logo" />
            <h1>Greek End Transfers</h1>
        </header>
    </>
  )
}

export default Header