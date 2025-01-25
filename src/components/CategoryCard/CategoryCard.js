import React from "react";
import PropTypes from "prop-types";

const CategoryCard = ({ title, image }) => (
  <div className="bg-gray-100 shadow-md rounded-lg p-4 text-center">
    <div className="w-full h-40 overflow-hidden rounded">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-semibold mt-2 text-black">{title}</h3>
  </div>
);

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;
