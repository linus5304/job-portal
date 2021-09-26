import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { StripeSubcription } from '../components/StripeSubcription';
import getStripe from '../utils/getStripe';


interface subscriptionProps{

}


 const subscription: React.FC<subscriptionProps> = ({}) => {
     const stripePromise = getStripe()
        return (
            <Elements stripe={stripePromise}>
                <StripeSubcription/>
            </Elements>
            
        );
};

export default subscription