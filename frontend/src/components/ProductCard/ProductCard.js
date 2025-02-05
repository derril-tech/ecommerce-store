//npm start
// import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SocialShare from "../SocialShare/SocialShare";
import ProductActions from "./ProductActions"; // Import the new action component

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-4 product-card">
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="product-name mb-2">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-green-500 font-bold text-xl mb-4">
          ${product.price}
        </p>
      </div>

      {/* Modern Action Buttons */}
      <div className="flex justify-center">
        <ProductActions product={product} />
      </div>

      {/* Social Share Component */}
      <div className="mt-4 flex space-x-2">
        <SocialShare
          url={`https://ecommerce-site.com/product/${product.id}`}
          title={product.name}
          iconSize="w-6 h-6"
        />
      </div>
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
