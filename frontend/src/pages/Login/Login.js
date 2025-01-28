import React, { useState } from "react";
import useAuth from "../../hooks/useAuth"; // Hook managing authentication logic
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

const Login = () => {
  const { login, loginWithGoogle, loginWithFacebook } = useAuth();
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for errors

  // Handle Username/Password Login
  const handleLogin = async () => {
    if (!username || !password) {
      setError("Username and password are required!");
      return;
    }

    try {
      await login(username, password); // Call the useAuth login method
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); // Call the useAuth hook's method for Google login
    } catch (error) {
      setError("Google login failed. Please try again.");
    }
  };

  // Handle Facebook Login
  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook(); // Call the useAuth hook's method for Facebook login
    } catch (error) {
      setError("Facebook login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="modal-container max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Login
        </h1>

        {/* Display Error Messages */}
        {error && (
          <p className="text-red-500 mb-4 text-sm text-center">{error}</p>
        )}

        {/* Username and Password Login */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

        {/* Social Login Options */}
        <div className="mt-6">
          <p className="text-center text-sm mb-4 text-gray-600 dark:text-gray-300">
            Or login with:
          </p>
          <GoogleLoginButton
            onClick={handleGoogleLogin}
            style={{
              textAlign: "center",
              borderRadius: "4px",
              marginBottom: "12px",
            }}
          >
            Sign in with Google
          </GoogleLoginButton>
          <FacebookLoginButton
            onClick={handleFacebookLogin}
            style={{ textAlign: "center", borderRadius: "4px" }}
          >
            Sign in with Facebook
          </FacebookLoginButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
