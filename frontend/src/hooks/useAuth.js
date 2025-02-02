import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  // ✅ Persist user session across page reloads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Ensures Navbar reflects logged-in state
    }
  }, []);

  // ✅ Login Function
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      // 🔹 Store token & user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user); // Instantly updates Navbar state

      // 🔹 Show login success popup for 1 second
      setShowLoginPopup(true);
      setTimeout(() => {
        setShowLoginPopup(false);
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // ✅ Register Function
  const register = async (username, email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // ✅ Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // Instantly removes user from Navbar
    navigate("/login");
  };

  return { user, login, register, logout, showLoginPopup };
};

export default useAuth;
