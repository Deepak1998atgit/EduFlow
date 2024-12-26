import { useEffect, useState } from "react";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input
} from "@material-tailwind/react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
// import PaymentForm from "./payment-form";
import { toast } from "react-toastify";
import {
  getConfig,
  createStripePayment,
} from "../../../api/endpoints/payment/stripe";
import { useParams } from "react-router-dom";
import PaymentForm from "./payment-form";

const StripeContainer: React.FC = () => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string>("");
  const { courseId } = useParams();
  const fetchConfig = async () => {
    try {
      const response = await getConfig();
      console.log("stripe",response)
      const publishableKey = response.data;
      console.log("gg",publishableKey);
      setStripePromise(() => loadStripe(publishableKey));
    } catch (error) {
      toast.error("Something went wrong", { position: toast.POSITION.BOTTOM_RIGHT })
    }
  };
  const paymentIntentHandler = async () => {
    try {
      const response = await createStripePayment(courseId ?? "");
      const { clientSecret } = response.data;
      setClientSecret(clientSecret);
    } catch (error) {
      toast.error("Something went wrong",{ position: toast.POSITION.BOTTOM_RIGHT })
    }
  };
  useEffect(() => {
    fetchConfig();
  }, []);

  useEffect(() => {
    paymentIntentHandler();
  }, []);
  console.log("stripe",clientSecret,"stripe")
  return (
    <div className="h-full w-full  p-20 justify-between mb-4 flex" >
      <Card className="w-1/2  mt-12 flex-col pt-7  pr-4 pl-5">
        <Typography variant="h5" color="blue-gray" className="font-semibold leading-tight  tracking-normal">
          CheckOut
        </Typography>
        <CardBody>
          <div className="flex w-5/6">
            <CardHeader className="flex-1  p-5">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png"
                alt="card-image"
                className=" object-cover"
              />
            </CardHeader>
            <CardHeader className="flex-1 p-5">
              <img
                src="https://imgs.search.brave.com/PL1nsW-gCqvFkgpUJRKhEz1V5tGhliKP5pnaogm4ZWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmVyZHdhbGxldC5j/b20vY2RuLWNnaS9p/bWFnZS9xdWFsaXR5/PTg1L2Nkbi9zb2Z0/d2FyZS9sb2dvcy9z/dHJpcGUucG5n"
                alt="card-image"
                className=" h-full object-contain"
              />
            </CardHeader>
            <CardHeader className="flex-1 p-5">
              <img
                src="https://imgs.search.brave.com/CyGwDKAiibZ8jXj4GaTnCkTpg0tjeGdTYA8cgF-DV1o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXJhem9ycGF5LWxv/Z28taWNvbi1kb3du/bG9hZC1pbi1zdmct/cG5nLWdpZi1maWxl/LWZvcm1hdHMtLXBh/eW1lbnQtZ2F0ZXdh/eS1icmFuZC1sb2dv/cy1pY29ucy0xMzk5/ODc1LnBuZz9mPXdl/YnAmdz0yNTY"
                alt="card-image"
                className="object-cover"
              />
            </CardHeader>

          </div>

        </CardBody>
        <div className='flex'>
          <div className="w-full">
            {clientSecret && stripePromise && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                   <PaymentForm/>
              </Elements>
            )}
          </div>
        </div>
      </Card>
      <Card className="w-96 mr-16 mt-16 h-4/5 p-4 ml-11">
        <div className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="w-28 rounded-2xl"
          />

          <div>
            <Typography variant="small" className="text-[#000000]">adipising elit, sed do eiusmod tempor</Typography>
            <Typography variant="small" className="text-[#5B5B5B]">Lorem ipsum dollar...</Typography>
            <Typography variant="h6">$24.69</Typography>
          </div>
        </div>
        <hr className="border-t-[1px] border-gray-500 w-full my-4" />
        <div className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="w-28 rounded-2xl"
          />

          <div>
            <Typography variant="small">adipising elit, sed do eiusmod tempor</Typography>
            <Typography variant="small">Lorem ipsum dollar...</Typography>
            <Typography variant="h6">$24.69</Typography>
          </div>
        </div>
        <hr className="border-t-[1px] border-gray-500 w-full my-4" />
        <div className="flex w-full justify-between text-[#5B5B5B]">
          <Typography variant="small">Subtotal</Typography>
          <Typography variant="small">$51.38</Typography>
        </div>
        <hr className="border-t-[1px] border-gray-500 w-full my-4" />
        <div className="flex w-full justify-between text-[#5B5B5B]">
          <Typography variant="small">Coupon Discount</Typography>
          <Typography variant="small">0%</Typography>
        </div>
        <hr className="border-t-[1px] border-gray-500 w-full my-4" />
        <div className="flex justify-between text-[#5B5B5B]">
          <Typography variant="small">Tax</Typography>
          <Typography variant="small">5</Typography>
        </div>
        <hr className="border-t-[1px] border-gray-500 w-full my-4" />
        <div className="flex justify-between">
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">$56.38</Typography>
        </div>
      </Card>
    </div>
  );
}
export default StripeContainer;