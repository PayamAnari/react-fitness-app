import React from 'react';
import HeroBannerImage from '../../assets/images/fit.png';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <div>
        <h2 className="animation-text">Gym Fitness</h2>
      </div>
      <div>
        <h3 className="animation-text">
          Sweat today, <br /> <span className="shine-text">shine</span> tomorrow
        </h3>
      </div>
      <div>
        <h4 className="animation-text">
          Maximize your gains with these key exercises
        </h4>
      </div>
      <div className="btn-container">
        <a className="explore-btn animation-text" href="#exercises">
          Explore Exercises
        </a>
      </div>
      <div>
        <h5>Exercise</h5>
      </div>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </div>
  );
};

export default HeroBanner;
