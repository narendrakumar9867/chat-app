import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "login-f41ee.firebaseapp.com",
  projectId: "login-f41ee",
  storageBucket: "login-f41ee.firebasestorage.app",
  messagingSenderId: "1043665359847",
  appId: "1:1043665359847:web:0356982d3e5ce3fd51a342",
  measurementId: "G-BF3VH55WBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
