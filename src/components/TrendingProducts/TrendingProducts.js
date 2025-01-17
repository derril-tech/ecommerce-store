import React from "react";
import ProductCard from "../Card/Card";
import "./TrendingProducts.css";

function TrendingProducts({ products }) {
  return (
    <div className="trending-products">
      <h2>Trending Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;
