// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/we b/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrb0qMihS0h5qWTY70NRTzF0EXZ66LYNs",
  authDomain: "react2-lesson8-e8408.firebaseapp.com",
  projectId: "react2-lesson8-e8408",
  storageBucket: "react2-lesson8-e8408.firebasestorage.app",
  messagingSenderId: "575160175110",
  appId: "1:575160175110:web:528bd5954069cbca779187",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
