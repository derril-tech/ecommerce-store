import React from "react";

const Admin = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Management Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            View Products
          </button>
        </div>

        {/* Order Management Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Manage Orders</h2>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            View Orders
          </button>
        </div>

        {/* User Management Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            View Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
