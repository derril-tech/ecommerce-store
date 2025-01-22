import React, { useState } from "react";
import PropTypes from "prop-types";

const SpinWheel = ({ options, onSpinComplete }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;

    const spinAngle = 360 * 5 + Math.floor(Math.random() * 360); // 5 full spins + random angle
    const selectedOption =
      options[Math.floor((spinAngle % 360) / (360 / options.length))];

    setIsSpinning(true);
    setRotation((prevRotation) => prevRotation + spinAngle);

    setTimeout(() => {
      setIsSpinning(false);
      onSpinComplete(selectedOption); // Pass selected option back
    }, 3000); // Duration of spin animation
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* Wheel */}
      <div
        className="rounded-full border-2 border-white flex justify-center items-center relative"
        style={{
          width: "250px",
          height: "250px",
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? "transform 3s ease-out" : "none",
          background:
            "conic-gradient(red 0% 25%, yellow 25% 50%, green 50% 75%, blue 75% 100%)",
        }}
      >
        {/* Marker for Spin Result */}
        <div
          className="absolute w-2 h-2 bg-black rounded-full"
          style={{
            top: "5px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
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
