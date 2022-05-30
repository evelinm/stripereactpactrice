import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe('pk_test_51L460EAlz4KiS5xuDPOxse9xyop6EijB1JlAN6UnxY6yklDPsh0VMiKgYMzHXHShOCjcp1rvPZuOEfC278PZKYah00aFZendsms'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
