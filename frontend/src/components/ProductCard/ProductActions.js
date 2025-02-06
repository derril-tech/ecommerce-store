import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";
import { NavLink } from "react-router-dom";
import {
  FaBolt,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"; // Import social icons

const ProductActions = ({ product }) => {
  const dispatch = useDispatch();
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ✅ New Popup State

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));

    // ✅ Show "Added to Cart" Popup for 1 Second
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    setWishlistAdded(!wishlistAdded);
  };

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  return (
    <div className="flex items-center justify-between w-full mt-4 relative">
      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-all"
      >
        Add to Cart
      </button>

      {/* "Added to Cart" Popup */}
      {showPopup && (
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-1 px-3 rounded shadow-md animate-fade-in-out">
          ✅ Added to Cart!
        </div>
      )}

      <div className="flex space-x-4 relative">
        {/* Wishlist Icon - Thicker Border */}
        <button onClick={handleAddToWishlist} title="Add to Wishlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={wishlistAdded ? "red" : "white"}
            stroke="black"
            strokeWidth="2" // ✅ Thickened border
            className="w-8 h-8 transition-all"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* Quick Checkout Icon */}
        <NavLink to="/checkout" title="Quick Checkout">
          <FaBolt className="w-6 h-6 text-black" />
        </NavLink>

        {/* Share Icon */}
        <button
          onClick={toggleSharePopup}
          title="Share Product"
          className="relative"
        >
          <FaShareAlt className="w-6 h-6 text-black" />
        </button>

        {/* Share Popup - Closer to the Share Icon */}
        {showSharePopup && (
          <div className="absolute bg-white shadow-lg p-3 rounded-lg bottom-12 right-0 flex space-x-3 z-50">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Facebook"
            >
              <FaFacebook className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-all" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Twitter"
            >
              <FaTwitter className="w-8 h-8 text-blue-400 hover:text-blue-600 transition-all" />
            </a>
            <a
              href={`https://www.instagram.com/`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Instagram"
            >
              <FaInstagram className="w-8 h-8 text-pink-600 hover:text-pink-800 transition-all" />
            </a>
            <a
              href={`https://wa.me/?text=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on WhatsApp"
            >
              <FaWhatsapp className="w-8 h-8 text-green-500 hover:text-green-700 transition-all" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductActions;
