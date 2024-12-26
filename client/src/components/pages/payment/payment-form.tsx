import { useState } from "react";
import {
  Typography,
  Button,
  Input
} from "@material-tailwind/react";
import { PaymentElement,useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
const PaymentForm = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [cardholderName, setCardholderName] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { courseId } = useParams();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Include the cardholder's name in the payment request
        payment_method_data: {
          billing_details: {
            name: cardholderName,
          },
        },
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/courses/${courseId}`,
      },
      redirect: "if_required",
    });
    if (error) {
      setMessage(error.message ?? "Something went wrong");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment status:" + paymentIntent.status);
      // await enrollStudent(courseId ?? "", paymentIntent);
      window.location.href = `/course/${courseId}/success`;
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsProcessing(false);
  };
  console.log("success message",message,"success message")
  return (
    <form
      id='payment-form'
      onSubmit={handleSubmit}
      className='border-solid border-gray-300 rounded-lg p-4 my-4'
    >
      <PaymentElement />
      <div>
        <Typography variant="small" color="black" className="text-[#5B5B5B]  text-[15px]  block">
          Cardholder Name
        </Typography>
        <Input
          crossOrigin="anonymous"
          type="text"
          id="card-name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          name="card-name"
          placeholder="Cardholder Name"
          className="w-full px-3 py-2 border focus:outline-none rounded-md mb-2 shadow-sm"
        />
      </div>
      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        className="w-full h-11 py-2 px-4 mt-5  mb-4 text-white font-semibold rounded-md "
      >
        {isProcessing ? "Processing ..." : "Pay now"}
      </Button>
       {/* Show any error or success messages */}
       {message && (
          <div
            id='payment-message'
            className='hidden bg-blue-900 text-green-500 p-4 m-4 rounded-lg text-sm'
          >
            {message}
          </div>
        )}
         <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
    </form>
  )
}

export default PaymentForm;