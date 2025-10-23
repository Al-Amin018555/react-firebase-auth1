//DO NOT SHARE FIREBASE CONFIG ONLINE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFYjhScKW7uaD5CAReQCRq6gg1twyjFPo",
  authDomain: "simple-firebase-auth-8296a.firebaseapp.com",
  projectId: "simple-firebase-auth-8296a",
  storageBucket: "simple-firebase-auth-8296a.firebasestorage.app",
  messagingSenderId: "1085250246101",
  appId: "1:1085250246101:web:0cb783213d4cef2d39195c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);