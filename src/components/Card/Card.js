import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, description, buttonText, onButtonClick }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    {image && (
      <img src={image} alt={title} className="w-full h-48 object-cover" />
    )}
    <div className="p-4">
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-gray-700 mb-4">{description}</p>}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Card;
