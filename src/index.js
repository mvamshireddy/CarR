import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './App';

// Load your public Stripe API key
const stripePromise = loadStripe('pk_test_51RMmjDForJmgHw8j1YIFVDyE0ac4Y0fIXZCkBwyJWrU5sJ4yXrwwTEDRx8XiXovZgJzk0Lpz4BJ4Y8MvF8BFzZ1Q00lDtRRwIF'); // Replace with your actual public Stripe key

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);