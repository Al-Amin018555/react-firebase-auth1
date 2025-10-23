// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG99b2Mw-JsQIP8_9yhEaHOp3N9nOI6zc",
    authDomain: "simple-firebase-auth2-5e138.firebaseapp.com",
    projectId: "simple-firebase-auth2-5e138",
    storageBucket: "simple-firebase-auth2-5e138.firebasestorage.app",
    messagingSenderId: "837018747593",
    appId: "1:837018747593:web:e0642bb5c6869550ba4318"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);