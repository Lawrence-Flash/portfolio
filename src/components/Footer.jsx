import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">Security&lt;Dev&gt;</div>
        <div className="footer-links">
          <a href="https://github.com/Lawrence-Flash" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/lawrence-tshabalala-629084257" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:lawrencetshabalala253@gmail.com">Contact</a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Sphamandla Lawrence Tshabalala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
