import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import Tick from '../../assets/images/404-tick.png';

function Completion() {
  useEffect(() => {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="confirm-container">
      <div className="confirm">
        <img src={Tick} alt="Tick Icon" />
        <h2>Thank You</h2>
        <p>Your payment has been successfully processed.</p>
        <h3>Gym Fitness</h3>
        <h4>
          Sweat today, <span>shine</span> tomorrow
        </h4>
      </div>
    </div>
  );
}

export default Completion;
