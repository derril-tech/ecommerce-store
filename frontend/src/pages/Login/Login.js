import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login, showLoginPopup } = useAuth(); // NEW: Added `showLoginPopup`
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="modal-container max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Login
        </h1>

        {/* 🔹 Display Login Success Popup */}
        {showLoginPopup && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg text-center">
            You are logged in!
          </div>
        )}

        {/* Display Error Messages */}
        {error && (
          <p className="text-red-500 mb-4 text-sm text-center">{error}</p>
        )}

        {/* Email & Password Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-gray-800 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-gray-800 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </div>

        {/* Register Redirect */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <a href="/register" className="text-green-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
