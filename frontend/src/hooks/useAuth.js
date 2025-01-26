import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook } from "../utils/firebase";

const useAuth = () => {
  const [user, setUser] = useState(null); // Holds the authenticated user
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Simulate checking user authentication status
  const checkAuth = async () => {
    setLoading(true);
    try {
      // Simulate an API call to check authentication
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to check authentication:", error);
    } finally {
      setLoading(false);
    }
  };

  // Log the user in
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    navigate("/"); // Redirect after login
  };

  // Social login using Google
  const loginWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/"); // Redirect after social login
      }
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  // Social login using Facebook
  const loginWithFacebook = async () => {
    try {
      const user = await signInWithFacebook();
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        navigate("/"); // Redirect after social login
      }
    } catch (error) {
      console.error("Facebook login failed:", error);
    }
  };

  // Log the user out
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { user, loading, login, logout, loginWithGoogle, loginWithFacebook };
};

export default useAuth;
