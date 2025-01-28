import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(null); // Holds the authenticated user
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Check user authentication status from the backend
  const checkAuth = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/current_user");
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error("Failed to check authentication:", error);
    } finally {
      setLoading(false);
    }
  };

  // Username/Password Login
  const login = async (username, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const userData = await response.json();
      setUser(userData); // Set the authenticated user
      localStorage.setItem("user", JSON.stringify(userData)); // Optional: Store in local storage
      navigate("/"); // Redirect to the homepage or dashboard
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Pass the error back to the caller for UI handling
    }
  };

  // Social login using Google
  const loginWithGoogle = () => {
    window.location.href = "/auth/google"; // Redirect to backend Google OAuth route
  };

  // Social login using Facebook (optional for future implementation)
  const loginWithFacebook = () => {
    console.log("Facebook login not implemented yet."); // Placeholder
  };

  // Log the user out
  const logout = async () => {
    try {
      await fetch("/api/logout", { method: "GET" });
      setUser(null);
      localStorage.removeItem("user"); // Clear local storage
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { user, loading, login, loginWithGoogle, loginWithFacebook, logout };
};

export default useAuth;
