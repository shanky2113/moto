import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Header Row: Logo + Title + Hamburger */}
      <div className="navbar-header">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="company-name">Motowebtech</h1>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div className="navbar-right">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/About" onClick={closeMenu}>About</Link></li>
          <li><Link to="/Product" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/Designing" onClick={closeMenu}>Designing</Link></li>
        </ul>
        <button className="contact-btn">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
