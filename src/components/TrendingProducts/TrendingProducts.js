import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";

function TrendingProducts({ products }) {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

TrendingProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrendingProducts;
