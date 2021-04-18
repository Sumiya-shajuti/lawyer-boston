import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IhQy7Cf0bEPN82EXGHSoNUXVtR8hib29svrkY5kVdnKfNynsnDkYbUkdaNAvLit2DQSVgOiM2vU1tqXSbWjBvZ700xTx2xPzh');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};
export default ProcessPayment;