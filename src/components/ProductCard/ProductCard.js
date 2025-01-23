import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";
import { Link, NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000); // Popup disappears after 1 second
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-4">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      </Link>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-2">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-green-500 font-bold text-xl mb-4">
          ${product.price}
        </p>
      </div>
      <div className="flex flex-wrap space-x-2">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none flex-1"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToWishlist}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none flex-1"
        >
          Add to Wishlist
        </button>
        <NavLink
          to="/checkout"
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex-1 text-center"
        >
          Quick Checkout
        </NavLink>
      </div>

      {/* Popup for product added */}
      {showPopup && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-1 px-3 rounded shadow-md animate-fade-in-out">
          Item Added!
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
