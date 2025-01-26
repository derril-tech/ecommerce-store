import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex" aria-label={`Rating: ${rating} out of 5`}>
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-yellow-400">
          ★
        </span>
      ))}
      {halfStar && <span className="text-yellow-400">★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300">
          ★
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
