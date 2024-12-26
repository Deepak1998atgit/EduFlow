import configKeys from 'config';
import Stripe from 'stripe';

const stripeSecretKey = configKeys.STRIPE_SECRET_KEY
const stripe = new Stripe(stripeSecretKey || "", {
  apiVersion: "2024-11-20.acacia",
});

export const paymentService = () => {
  const createPaymentIntent = async (amount: number) => {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'inr',
      amount: amount * 100,
      automatic_payment_methods:{ enabled: true }
    });
    console.log("payment called")
    return paymentIntent;
  };

  const getConfig = () => configKeys.STRIPE_PUBLISHABLE_KEY;

  return {
    createPaymentIntent,
    getConfig
  };
};

export type PaymentServiceImpl = typeof paymentService;



