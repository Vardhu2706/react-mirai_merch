import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const pub_API_KEY =
    "pk_test_51I6YHWIdjtldjbnIuMA2vxuz26pzQagQRDxIhWXSC2CYUKRk2yU7sJpPU1yuUcZk6KtENUkePdqzNrYQQTfoGCDm00fI6z0Ji1";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Mirai Merch"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/V9PpHdX/circle-cropped-1.png"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pub_API_KEY}
    />
  );
};

export default StripeCheckoutButton;
