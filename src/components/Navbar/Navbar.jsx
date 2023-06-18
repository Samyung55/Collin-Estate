import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../../assets/download-removebg-preview.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="container">
        <div className={`nav-container ${menuOpen ? 'menu-open' : ''}`}>
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={`nav-menu ${menuOpen ? 'menu-open' : ''}`}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/property">Property</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Navbar;
