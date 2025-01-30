import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithFacebook } from "../utils/firebase";
// import { auth, onAuthStateChanged, signOut } from "firebase/auth"; // Firebase Disabled

const useAuth = () => {
  const [user, setUser] = useState(null); // Holds the authenticated user
  const [loading, setLoading] = useState(false); // Set false to prevent infinite loading
  const navigate = useNavigate();

  // Firebase auth state listener is disabled
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  //     if (firebaseUser) {
  //       setUser(firebaseUser);
  //       localStorage.setItem("user", JSON.stringify(firebaseUser)); // Store in local storage
  //     } else {
  //       setUser(null);
  //       localStorage.removeItem("user"); // Remove from local storage
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // Google Login (Disabled)
  const loginWithGoogle = async () => {
    console.warn("⚠️ Google login is temporarily disabled.");
    return { error: "Firebase disabled for testing." };
  };

  // Facebook Login (Disabled)
  const loginWithFacebook = async () => {
    console.warn("⚠️ Facebook login is temporarily disabled.");
    return { error: "Firebase disabled for testing." };
  };

  // Logout (Disabled)
  const logout = async () => {
    console.warn("⚠️ Logout is disabled (Firebase is off).");
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return { user, loading, loginWithGoogle, loginWithFacebook, logout };
};

export default useAuth;
