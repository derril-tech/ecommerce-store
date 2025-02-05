import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // FontAwesome Star Icons

const StarRating = ({ rating = 0 }) => {
  // Ensure rating is a number between 0 and 5
  const validRating = Math.max(0, Math.min(Number(rating) || 0, 5));

  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  console.log(
    "⭐ Full:",
    fullStars,
    "Half:",
    hasHalfStar,
    "Empty:",
    emptyStars
  ); // Debugging Output

  return (
    <div className="flex items-center space-x-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500 w-5 h-5" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 w-5 h-5" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className="text-gray-400 w-5 h-5" />
      ))}
    </div>
  );
};

export default StarRating;
