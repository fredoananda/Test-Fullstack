import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">Categories</a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
