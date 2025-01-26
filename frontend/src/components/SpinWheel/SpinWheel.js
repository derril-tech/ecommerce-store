import React, { useState } from "react";
import PropTypes from "prop-types";

const SpinWheel = ({ options, onSpinComplete }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;

    const spinAngle = 360 * 5 + Math.floor(Math.random() * 360); // 5 full spins + random angle
    const sectionAngle = 360 / options.length;
    const totalRotation = rotation + spinAngle;

    setIsSpinning(true);
    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);

      // Calculate the section where the wheel stops
      const finalAngle = totalRotation % 360;
      const sectionIndex = Math.floor(finalAngle / sectionAngle);
      const selectedOption = options[sectionIndex];

      onSpinComplete(selectedOption); // Pass the corresponding option back
    }, 3000); // Duration of spin animation
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* DISCOUNT Label */}
      <h1 className="text-white font-bold text-2xl mb-4">DISCOUNT</h1>

      {/* Wheel and Lever */}
      <div className="relative">
        {/* Lever */}
        <div
          className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-10 bg-white z-10" // Added z-index
          style={{
            clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)", // Triangle lever pointing downwards
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        ></div>

        {/* Wheel */}
        <div
          className="rounded-full border-2 border-white flex justify-center items-center relative z-0" // Set wheel's z-index lower than the lever
          style={{
            width: "250px",
            height: "250px",
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? "transform 3s ease-out" : "none",
            background:
              "conic-gradient(red 0% 25%, #d4a017 25% 50%, green 50% 75%, blue 75% 100%)",
          }}
        >
          {/* Sections Text */}
          <div
            className="absolute w-full h-full flex justify-center items-center"
            style={{ transform: "rotate(0deg)" }}
          >
            <span
              className="absolute text-white font-bold"
              style={{ transform: "rotate(-22.5deg) translateY(-80px)" }}
            >
              40%
            </span>
          </div>
          <div
            className="absolute w-full h-full flex justify-center items-center"
            style={{ transform: "rotate(90deg)" }}
          >
            <span
              className="absolute text-white font-bold"
              style={{ transform: "rotate(-22.5deg) translateY(-80px)" }}
            >
              80%
            </span>
          </div>
          <div
            className="absolute w-full h-full flex justify-center items-center"
            style={{ transform: "rotate(180deg)" }}
          >
            <span
              className="absolute text-white font-bold"
              style={{ transform: "rotate(-22.5deg) translateY(-80px)" }}
            >
              60%
            </span>
          </div>
          <div
            className="absolute w-full h-full flex justify-center items-center"
            style={{ transform: "rotate(270deg)" }}
          >
            <span
              className="absolute text-white font-bold"
              style={{ transform: "rotate(-22.5deg) translateY(-80px)" }}
            >
              20%
            </span>
          </div>
        </div>
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
