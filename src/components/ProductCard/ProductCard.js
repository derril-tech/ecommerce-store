import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-green-500 font-bold text-xl mt-2">{product.price}</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 focus:outline-none">
        Add to Cart
      </button>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
