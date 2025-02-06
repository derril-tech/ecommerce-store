import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  updateQuantity,
  addToCart,
} from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleAdd = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row bg-gray-200 dark:bg-gray-300 shadow-md rounded-lg p-4"
            >
              {/* Product Image */}
              <div className="w-full sm:w-1/4 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              {/* Product Details */}
              <div className="sm:ml-4 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  {/* Product Name and Price */}
                  <div>
                    <h2 className="text-lg font-semibold text-black dark:text-black">
                      {item.name}
                    </h2>
                    <p className="text-green-500 font-bold">${item.price}</p>
                  </div>
                </div>
                {/* Quantity and Actions */}
                <div className="flex items-center mt-4">
                  <button
                    onClick={() => handleAdd(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2 text-sm"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2 text-sm"
                  >
                    Remove
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="border w-12 text-center rounded text-black dark:text-black"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            {/* ✅ Updated Total Text to White in Dark Mode */}
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Total: ${calculateTotal()}
            </h2>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-lg">Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
