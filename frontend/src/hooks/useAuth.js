import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, signInWithFacebook } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState(null); // Holds the authenticated user
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Listen for Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        localStorage.setItem("user", JSON.stringify(firebaseUser)); // Store in local storage
      } else {
        setUser(null);
        localStorage.removeItem("user"); // Remove from local storage
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Google Login
  const loginWithGoogle = async () => {
    try {
      const firebaseUser = await signInWithGoogle();
      setUser(firebaseUser);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      throw error;
    }
  };

  // Facebook Login
  const loginWithFacebook = async () => {
    try {
      const firebaseUser = await signInWithFacebook();
      setUser(firebaseUser);
      navigate("/");
    } catch (error) {
      console.error("Facebook login failed:", error);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { user, loading, loginWithGoogle, loginWithFacebook, logout };
};

export default useAuth;
