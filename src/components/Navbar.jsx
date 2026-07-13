import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <div className="logo">
          <a href="#">Security&lt;Dev&gt;</a>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
