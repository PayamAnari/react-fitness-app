import React from 'react';
import { Button } from '@mui/material';
import { plansData } from './PlanData';
import { Link } from 'react-router-dom';
import whiteTick from '../../assets/icons/whiteTick.png';
import './PlanCards.css';

const PlanCards = () => {
  return (
    <div id="plans" className="plans-container">
      <div className="ready-container">
        Ready to Start <span>Your Journey</span> now with us
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>€ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={feature + i}>
                  <img src={whiteTick} alt="tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/payment/${plan.id}`}>
              <Button>
                <div className="btn-plan">Join now</div>
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCards;
