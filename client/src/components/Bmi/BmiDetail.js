import React, { useState } from 'react';
import { fetchBmiData } from '../../utils/fetchBmiData';
import './Bmi.css';
import underweightImage from '../../assets/images/underweight.png';
import normalWeightImage from '../../assets/images/normalweight.png';
import overweightImage from '../../assets/images/overweight.png';
import obeseImage from '../../assets/images/obese.png';
import BmiDetailImage from '../../assets/images/bmi-detail.png';

const Bmi = () => {
  const [weight, setWeight] = useState('150');
  const [height, setHeight] = useState('1.83');
  const [btnText, setBtnText] = useState('Calculate');
  const [bmi, setBmi] = useState(null);
  const [weightCategory, setWeightCategory] = useState('');

  const handleFetchBMI = async (e) => {
    e.preventDefault();
    setBtnText('Calculating...');

    try {
      const bmiResult = await fetchBmiData(weight, height);
      setBmi(bmiResult);

      if (bmiResult < 18.5) {
        setWeightCategory('Underweight');
      } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
        setWeightCategory('Normal Weight');
      } else if (bmiResult >= 25 && bmiResult < 29.9) {
        setWeightCategory('Overweight');
      } else {
        setWeightCategory('Obese');
      }

      <img
        src={
          bmi < 18.5
            ? underweightImage
            : bmi >= 18.5 && bmi < 24.9
            ? normalWeightImage
            : bmi >= 25 && bmi < 29.9
            ? overweightImage
            : obeseImage
        }
        alt="BMI Category"
      />;
    } catch (error) {
      console.error(error.message);
    }

    setBtnText('Calculate');
  };

  return (
    <div className="bmi-container-detail">
      <div className="bmi-detail-img">
        <img src={BmiDetailImage} alt="BmiDetail" />
      </div>
      <div className="bmi-detail-content">
        <h2>BMI Calculator</h2>
        <h5>CALCULATE YOUR BMI USING WEIGHT AND HEIGHT</h5>
        <form className="form-bmi-detail">
          <input
            type="text"
            placeholder="Weight e.g 125lbs"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Height e.g 172cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button className="btn-bmi-detail" onClick={handleFetchBMI}>
            {btnText}
          </button>
        </form>
        <div className='bmi-results'>
        {bmi && (
          <p>
            Your Body Mass Index Is: <span>{bmi}</span>
          </p>
        )}
        {weightCategory && (
          <p>
            Your Weight Category Is: <span>{weightCategory}</span>
          </p>
        )}
        {weightCategory === 'Underweight' && (
          <img src={underweightImage} alt="Underweight" className="bmi-image" />
        )}
        {weightCategory === 'Normal Weight' && (
          <img
            src={normalWeightImage}
            alt="Normal Weight"
            className="bmi-image"
          />
        )}
        {weightCategory === 'Overweight' && (
          <img src={overweightImage} alt="Overweight" className="bmi-image" />
        )}
        {weightCategory === 'Obese' && (
          <img src={obeseImage} alt="Obese" className="bmi-image" />
        )}
        </div>
      </div>
    </div>
  );
};

export default Bmi;
