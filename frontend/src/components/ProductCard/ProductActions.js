import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaBolt } from "react-icons/fa"; // Import icons

const ProductActions = ({ product }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setExpanded(null);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    setExpanded(null);
  };

  return (
    <div className="relative flex space-x-4">
      {/* Add to Cart - Expandable */}
      <div className="relative">
        <button
          onClick={() => setExpanded(expanded === "cart" ? null : "cart")}
          className="text-green-500 text-2xl hover:text-green-700"
          title="Add to Cart"
        >
          <FaShoppingCart />
        </button>

        {expanded === "cart" && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-3 rounded-lg">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="border w-16 p-1 text-center rounded"
            />
            <button
              onClick={handleAddToCart}
              className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 w-full"
            >
              Confirm
            </button>
          </div>
        )}
      </div>

      {/* Add to Wishlist - Icon */}
      <button
        onClick={handleAddToWishlist}
        className="text-blue-500 text-2xl hover:text-blue-700"
        title="Add to Wishlist"
      >
        <FaHeart />
      </button>

      {/* Quick Checkout - Icon */}
      <NavLink
        to="/checkout"
        className="text-yellow-500 text-2xl hover:text-yellow-700"
        title="Quick Checkout"
      >
        <FaBolt />
      </NavLink>
    </div>
  );
};

export default ProductActions;
