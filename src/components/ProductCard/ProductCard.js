import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Popup disappears after 3 seconds
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </Link>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-green-500 font-bold text-xl mt-2">
          ${product.price}
        </p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>

      {/* Popup for product added */}
      {showPopup && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-1 px-3 rounded shadow-md animate-fade-in-out">
          Product Added to Cart
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
