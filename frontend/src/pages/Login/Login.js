import React, { useState } from "react";
import useAuth from "../../hooks/useAuth"; // Hook managing authentication logic
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

const Login = () => {
  const { login, loginWithGoogle, loginWithFacebook } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); // Call the useAuth hook's method
    } catch (error) {
      setError("Google login failed. Please try again.");
    }
  };

  // Handle Facebook Login
  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook(); // Call the useAuth hook's method
    } catch (error) {
      setError("Facebook login failed. Please try again.");
    }
  };

  // Handle Username/Password Login
  const handleLogin = () => {
    if (!username || !password) {
      setError("Username and password are required!");
      return;
    }

    const userData = { username }; // Add more user details if needed
    login(userData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="modal-container">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-gray-800 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-gray-800 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </div>

        <div className="mt-6">
          <p className="text-center text-sm mb-4">Or login with:</p>
          <GoogleLoginButton
            onClick={handleGoogleLogin}
            style={{ textAlign: "center" }}
          >
            Sign in with Google
          </GoogleLoginButton>
          <FacebookLoginButton
            onClick={handleFacebookLogin}
            style={{ textAlign: "center" }}
          >
            Sign in with Facebook
          </FacebookLoginButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
