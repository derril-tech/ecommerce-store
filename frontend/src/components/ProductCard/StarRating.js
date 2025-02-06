import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // FontAwesome Star Icons

const StarRating = ({ rating = 0 }) => {
  // Ensure rating is a number between 0 and 5
  const validRating = Math.max(0, Math.min(Number(rating) || 0, 5));

  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500 w-5 h-5" />
      ))}

      {/* Half Star */}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 w-5 h-5" />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-gray-400 w-5 h-5" />
      ))}
    </div>
  );
};

export default StarRating;
