import React, { useState } from "react";
import useAuth from "../../hooks/useAuth"; // Hook managing authentication logic
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

const Login = () => {
  const { loginWithGoogle, loginWithFacebook } = useAuth();
  const [error, setError] = useState(""); // State for errors

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      setError("Google login failed. Please try again.");
    }
  };

  // Handle Facebook Login
  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
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

        {/* Social Login Options */}
        <div className="mt-6">
          <p className="text-center text-sm mb-4 text-gray-600 dark:text-gray-300">
            Login with:
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
