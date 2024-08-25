import React from 'react';
import { Link } from 'react-router-dom';

export default function TabBar() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/nonprofits">Nonprofits</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
    </nav>
  );
}