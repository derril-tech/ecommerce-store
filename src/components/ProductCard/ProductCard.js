import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
      <button className="mt-auto bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 focus:outline-none">
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
