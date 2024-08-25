import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // We'll define the styles below

export default function header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/path-to-your-logo.png" alt="blueprint logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/nonprofits">Nonprofits</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact" className="contact-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="hero-section">
        <h1>Tech for Social Good</h1>
        <p>Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
      </div>
    </header>
  );
}