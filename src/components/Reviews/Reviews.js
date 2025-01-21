import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";

const Reviews = ({ reviews }) => {
  const [visibleCount, setVisibleCount] = useState(5); // Show 5 reviews initially

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Load 5 more reviews
  };

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {visibleReviews.length > 0 ? (
        visibleReviews.map((review) => (
          <div key={review.id} className="border-b pb-4 mb-4">
            <h3 className="font-semibold">{review.user}</h3>
            <StarRating rating={review.rating} />
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-sm text-gray-400">{review.date}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to review this product!</p>
      )}
      {visibleReviews.length < reviews.length && (
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
        >
          Load More Reviews
        </button>
      )}
    </div>
  );
};

export default Reviews;
