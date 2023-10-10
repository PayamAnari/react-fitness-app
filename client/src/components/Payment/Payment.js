import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { getPlanCards } from '../PlanCards/PlanData';

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [planAmount, setPlanAmount] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://gym-fitness-vdt1.onrender.com/get-plan-amount/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlanAmount(data.amount);
      })
      .catch((error) => {
        console.error('Error fetching plan amount:', error);
      });
  }, [id]);

  useEffect(() => {
    fetch('https://gym-fitness-vdt1.onrender.com/config')
      .then((response) => response.json())
      .then(async (data) => {
        const { publishableKey } = data;
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        console.error('Error fetching publishable key:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://gym-fitness-vdt1.onrender.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planId: id }),
    })
      .then(async (result) => {
        if (result.status === 200) {
          const { clientSecret } = await result.json();
          setClientSecret(clientSecret);
        } else {
          throw new Error('Payment failed');
        }
      })
      .catch((error) => {
        console.error('Error creating payment intent:', error);
      });
  }, [id]);

  return (
    <div className="text-container">
      <h1>We are glad that you chose us</h1>
      {planAmount !== null && (
        <p>
          Plan: <span>{getPlanCards(id).name}</span>
          <br />
          Price: <span>{planAmount} EUR</span>
        </p>
      )}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}

export default Payment;
