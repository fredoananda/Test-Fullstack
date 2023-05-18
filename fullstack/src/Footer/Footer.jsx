import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            &copy; My Website Alfredo Ananda {new Date().getFullYear()}
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span className="footer-divider">|</span>
            <a href="#">Terms &amp; Conditions and Contact </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
