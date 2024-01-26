// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-8f31c.firebaseapp.com",
  projectId: "netflixgpt-8f31c",
  storageBucket: "netflixgpt-8f31c.appspot.com",
  messagingSenderId: "1046359716980",
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: "G-0CHR0CED5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();