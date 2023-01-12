import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log("promise bye new", stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  // console.log("booking data", booking);
  return (
    <div>
      <h2 className="text-3xl">
        Payment for
        <span className="text-bold text-primary"> {treatment}</span>
      </h2>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
