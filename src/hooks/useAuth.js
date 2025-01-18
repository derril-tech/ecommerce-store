import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  // Log the user out
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { user, loading, login, logout };
};

export default useAuth;
