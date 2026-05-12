import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <nav className="navbar">
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button className="btn-order">Order Now</button>
      </nav>

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