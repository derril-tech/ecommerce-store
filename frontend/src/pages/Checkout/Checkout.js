import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "../../components/Payment/Payment";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Elements stripe={stripePromise}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
          Checkout
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipping Address Form */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Shipping Address
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingAddress.name}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingAddress.address}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingAddress.city}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={shippingAddress.postalCode}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={shippingAddress.country}
                onChange={handleInputChange}
                className="border w-full p-2 rounded"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Order Summary
            </h2>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between text-black">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold mt-6 text-black">
              Total: ${calculateTotal().toFixed(2)}
            </h3>
            {/* Payment Component */}
            <Payment amount={calculateTotal()} />
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default Checkout;
