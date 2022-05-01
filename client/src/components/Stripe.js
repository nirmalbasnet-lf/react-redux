import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { handleStripeToken } from '../actions';

const Stripe = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name="FULLSTACK"
      description="Pay $5 for email credits"
      amount={500}
      token={token => dispatch(handleStripeToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Stripe;
