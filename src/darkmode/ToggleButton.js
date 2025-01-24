import React from "react";
import "./ToggleButton.css"; // Add custom styles for the toggle button

const ToggleButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
