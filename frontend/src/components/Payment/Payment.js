import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

console.log("✅ Stripe Loaded:", window.Stripe ? "Yes" : "No");

const visaLogo = require("../../assets/visa.png");
const mastercardLogo = require("../../assets/mastercard.png");

const Payment = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [cardType, setCardType] = useState(null);

  const handleCardChange = (event) => {
    console.log("Full Event Data:", event); // Debug entire event structure

    if (event.brand === "visa") {
      console.log("✅ Detected Visa");
      setCardType(visaLogo);
    } else if (event.brand === "mastercard") {
      console.log("✅ Detected Mastercard");
      setCardType(mastercardLogo);
    } else {
      console.log("⚠️ Unknown Card Brand:", event.brand);
      setCardType(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError("Stripe has not loaded properly.");
      setLoading(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/payment/process", {
        amount: amount * 100,
        currency: "usd",
        paymentMethodId: paymentMethod.id,
      });

      if (response.data.success) {
        setSuccess(true);
      } else {
        setError("Payment failed. Try again.");
      }
    } catch (err) {
      setError("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4 text-black">
        Enter Your Payment Details
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Payment Successful!</p>}

      {/* Card Logos Display */}
      <div className="flex space-x-4 mb-4">
        <img src={visaLogo} alt="Visa" className="w-12 h-8 object-contain" />
        <img
          src={mastercardLogo}
          alt="Mastercard"
          className="w-12 h-8 object-contain"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative border p-4 rounded-lg bg-white shadow-sm">
          {/* Card Logo */}
          {cardType && (
            <img
              src={cardType}
              alt="Card Type"
              className="absolute right-4 top-4 w-16 h-10 object-contain"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}

          {/* Card Input */}
          <CardElement
            onChange={(event) => {
              console.log("🔥 Card Element Changed:", event); // Debug event
              handleCardChange(event);
            }}
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#333",
                  "::placeholder": { color: "#aaa" },
                },
                invalid: { color: "#e3342f" },
              },
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading || !stripe}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
