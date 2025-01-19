import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  console.log("ProductCard rendered:", product); // Debug log

  const handleAddToCart = () => {
    console.log("Adding to cart:", product); // Debug log
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-green-500 font-bold text-xl mt-2">
          ${product.price}
        </p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 focus:outline-none"
      >
        Add to Cart
      </button>
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
