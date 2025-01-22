import React, { useState } from "react";
import PropTypes from "prop-types";

const SpinWheel = ({ options, onSpinComplete }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;

    console.log("Spin button clicked!");

    const spinAngle = 360 * 5 + Math.floor(Math.random() * 360); // 5 full spins + random angle
    const selectedOption =
      options[Math.floor((spinAngle % 360) / (360 / options.length))];

    console.log("Selected option:", selectedOption);

    setIsSpinning(true);
    setRotation((prevRotation) => prevRotation + spinAngle);

    setTimeout(() => {
      setIsSpinning(false);
      onSpinComplete(selectedOption); // Pass selected option back
    }, 3000); // Duration of spin animation
  };

  console.log("SpinWheel rendered!");

  return (
    <div className="flex flex-col items-center">
      {/* Wheel */}
      <div
        className="w-64 h-64 rounded-full border-4 border-gray-300 flex justify-center items-center relative"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? "transform 3s ease-out" : "none",
        }}
      >
        {/* Wheel Slices */}
        {options.map((option, index) => (
          <div
            key={index}
            className={`absolute w-1/2 h-1/2 bg-${option.color}-500`}
            style={{
              transform: `rotate(${(360 / options.length) * index}deg)`,
              clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
            }}
          >
            <div
              className="text-center text-sm text-white transform"
              style={{
                transform: `rotate(${
                  -(360 / options.length) * index
                }deg) translateY(-40px)`,
              }}
            >
              {option.label}
            </div>
          </div>
        ))}
      </div>
      {/* Spin Button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className={`mt-6 px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 ${
          isSpinning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>
    </div>
  );
};

SpinWheel.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSpinComplete: PropTypes.func.isRequired,
};

export default SpinWheel;
