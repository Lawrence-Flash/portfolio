import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-content fade-in">
        <p className="greeting">Hello, I'm</p>
        <h1 className="name">Sphamandla Lawrence Tshabalala</h1>
        <h2 className="role">Cybersecurity Enthusiast & Developer</h2>
        <p className="bio">
          I build secure applications, analyze vulnerabilities, and design robust architectures. 
          Welcome to my portfolio showcasing my journey through code, security, and innovation.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#certificates" className="btn btn-secondary">My Certifications</a>
        </div>
      </div>
      <div className="hero-bg-glow"></div>
    </section>
  );
};

export default HeroSection;
