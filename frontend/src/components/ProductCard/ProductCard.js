import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductActions from "./ProductActions";
import StarRating from "./StarRating"; // ✅ Import Star Rating Component

const ProductCard = ({ product }) => {
  // ✅ Fetch reviews from Redux store
  const reviews = useSelector((state) =>
    state.reviews.items.filter((review) => review.productId === product.id)
  );

  // ✅ Calculate the average rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  console.log("🔍 Product Data:", product);
  console.log(`⭐ Average Rating for ${product.name}:`, averageRating);

  return (
    <div className="relative bg-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-4 product-card">
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
        <p className="text-green-500 font-bold text-xl mb-2">
          ${product.price}
        </p>

        {/* ⭐ Display Star Rating */}
        <div className="flex items-center space-x-2">
          <StarRating rating={averageRating} />
          <span className="text-gray-500 text-sm">
            {averageRating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Modern Action Buttons */}
      <div className="flex justify-center">
        <ProductActions product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
