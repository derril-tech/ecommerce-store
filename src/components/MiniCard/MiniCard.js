import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MiniCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 bg-white shadow-lg rounded-lg p-4 w-64">
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div>{item.name}</div>
                <div>
                  ${item.price} x {item.quantity}
                </div>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <div className="flex justify-between items-center font-bold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <NavLink
            to="/checkout"
            className="bg-green-500 text-white block text-center py-2 mt-2 rounded hover:bg-green-600"
          >
            Checkout
          </NavLink>
          <NavLink
            to="/checkout"
            className="bg-blue-500 text-white block text-center py-2 mt-2 rounded hover:bg-blue-600"
          >
            Quick Checkout
          </NavLink>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default MiniCart;
