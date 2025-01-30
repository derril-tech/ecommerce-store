// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   FacebookAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";

// // Firebase configuration from environment variables
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// // Check if any Firebase keys are missing
// const areFirebaseKeysMissing = Object.values(firebaseConfig).some(
//   (value) => !value
// );

// if (areFirebaseKeysMissing) {
//   console.warn(
//     "⚠️ Warning: Firebase credentials are missing. Firebase will not be initialized."
//   );
// }

// // Initialize Firebase only if keys are present
// const app = !areFirebaseKeysMissing ? initializeApp(firebaseConfig) : null;
// const auth = app ? getAuth(app) : null;

// // Providers for Google & Facebook Authentication
// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// // Google Sign-In Function
const signInWithGoogle = async () => {
  console.warn("⚠️ Google Sign-In is temporarily disabled.");
  return { error: "Firebase disabled for testing." };
};

// // Facebook Sign-In Function
const signInWithFacebook = async () => {
  console.warn("⚠️ Facebook Sign-In is temporarily disabled.");
  return { error: "Firebase disabled for testing." };
};

// export { auth, signInWithGoogle, signInWithFacebook };
export { signInWithGoogle, signInWithFacebook }; // Keep exports to prevent errors
