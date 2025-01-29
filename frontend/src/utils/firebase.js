import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase App & Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers for Google & Facebook Authentication
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Google Sign-In Function
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google User:", result.user); // Log user data for debugging
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error); // Log the exact error
    return { error: error.message }; // Return the error message
  }
};

// Facebook Sign-In Function
const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    console.log("Facebook User:", result.user); // Log user data for debugging
    return result.user;
  } catch (error) {
    console.error("Facebook Sign-In Error:", error);
    return { error: error.message }; // Return the error message
  }
};

export { auth, signInWithGoogle, signInWithFacebook };
