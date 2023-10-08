import React from 'react';
import { Link } from 'react-router-dom';
import BmiImage from '../../assets/images/bmi.png';
import './Bmi.css';
import BmiIcon from '../../assets/images/bmi-icon.png';

const Bmi = () => {
  return (
    <div id="bmi" className="bmi-section">
      <div className="bmi-img">
        <img src={BmiImage} alt="BmiImage" />
      </div>
      <div className="bmi-content">
        <img src={BmiIcon} alt="BmiIcon" />
        <h2>Calculate Your BMI</h2>
        <p>
          Bmi is a numerical measurement of a person's
          <br /> weight in relation to their height.
          <br />
          It provides a quick assessment of whether an <br />
          individual falls within a healthy weight range
        </p>
        <Link className="bmi-link" to="/bmi-detail">
          Let's Start
        </Link>
      </div>
    </div>
  );
};

export default Bmi;
