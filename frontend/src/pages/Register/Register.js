import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    try {
      await register(username, email, password);
      setSuccess(true);
      setError("");
    } catch (err) {
      setError("Registration failed. User may already exist.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="modal-container max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Sign Up
        </h1>

        {/* Display Success Message */}
        {success && (
          <p className="text-green-500 mb-4 text-sm text-center">
            Registration successful! You can now{" "}
            <a href="/login" className="text-green-600 hover:underline">
              log in
            </a>
            .
          </p>
        )}

        {/* Display Error Messages */}
        {error && (
          <p className="text-red-500 mb-4 text-sm text-center">{error}</p>
        )}

        {/* Registration Form Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-gray-800 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
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
            onClick={handleRegister}
            className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
