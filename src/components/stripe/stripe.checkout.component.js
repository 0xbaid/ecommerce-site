import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_XWOQqHkaZGley6engyrCK2RT00GPmjgZAr';
    const onToken = token => {
        console.log(token)
        alert('Successfuly Paid!')
    }
    return (
        <StripeCheckout
        label = 'Pay Now'
        image ='https://sendeyo.com/up/d/f3eb2117da'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        description = {`Your total price is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;