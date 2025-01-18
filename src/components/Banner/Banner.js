import React from "react";

const Banner = () => (
  <div className="bg-gradient-to-r from-green-400 to-orange-500 text-white text-center flex items-center justify-center h-72 rounded-lg">
    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to Emneno</h1>
      <p className="text-lg mb-6">
        Discover the best deals on the latest products
      </p>
      <button className="bg-white text-green-500 font-semibold py-2 px-6 rounded hover:bg-green-500 hover:text-white">
        Shop Now
      </button>
    </div>
  </div>
);

export default Banner;
