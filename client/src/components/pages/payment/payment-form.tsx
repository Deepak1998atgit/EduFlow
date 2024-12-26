import { useState } from "react";
import {
  Typography,
  Button,
  Input
} from "@material-tailwind/react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { enrollStudent } from "@/api/endpoints/course/Course";
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
      await enrollStudent(courseId ?? "", paymentIntent);
      window.location.href = `/course/${courseId}/payment-success`;
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsProcessing(false);
  };
  console.log("success message", message, "success message")
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
        className="w-full h-11 py-2 px-4 mt-12  mb-4 text-white bg-[#49BBBD] font-semibold rounded-2xl"
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
    </form>
  )
}

export default PaymentForm;