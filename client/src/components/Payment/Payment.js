import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { getPlanCards } from '../PlanCards/PlanData';
import Completion from './Completion';

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [planAmount, setPlanAmount] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5252/get-plan-amount/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Plan amount not found');
        }
      })
      .then((data) => {
        setPlanAmount(data.amount);
      })
      .catch((error) => {
        console.error('Error fetching plan amount:', error);
      });
  }, [id]);

  const planId = parseInt(id);
  const selectedPlan = getPlanCards(planId);

  useEffect(() => {
    fetch('http://localhost:5252/config').then(async (r) => {
      const { publishableKey } = await r.json();

      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5252/create-payment-intent', {
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
    <>
      <div className="text-container">
        <h1>We are glad that you chose us</h1>
        {planAmount !== null && (
          <p>
            Plan: <span>{selectedPlan.name}</span>
            <br />
            Price: <span>{planAmount} EUR</span>
          </p>
        )}
        {clientSecret && stripePromise && !paymentSuccess && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
        {paymentSuccess && <Completion />}
      </div>
    </>
  );
}

export default Payment;
