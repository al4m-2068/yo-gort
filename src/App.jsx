import React from 'react';
import logo from './assets/Group 2.svg'; // Sesuaikan path logo kamu
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      {/* Navbar Mobile Style */}
      <nav className="navbar">
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={logo} alt="Yo!Gort Logo" className="nav-logo" />
        <button className="btn-order">Order Now</button>
      </nav>

      {/* Hero Content */}
      <section className="hero-section">
        <div className="badge">FINE RECIPE!</div>
        
        <h1 className="hero-title">
          Your Daily <br />
          Spoon of <br />
          <span className="highlight">Happiness</span>
        </h1>

        <p className="hero-desc">
          Indulge in our creamy, probiotic-rich yogurt made with 100% natural 
          ingredients and a whole lot of love.
        </p>

        <div className="button-group">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-outline">Explore Flavors</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;