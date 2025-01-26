import React from "react";
import PropTypes from "prop-types";

const Button = ({
  text,
  onClick,
  type = "button",
  color = "bg-green-500",
  textColor = "text-white",
  size = "py-2 px-4",
  hoverColor = "hover:bg-green-600",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`rounded ${color} ${textColor} ${size} ${hoverColor} font-semibold`}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default Button;
