// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyArDEMggLkztDAJIGNWWGLRMai-1OWKxkQ",
  authDomain: "vixxtensions.firebaseapp.com",
  projectId: "vixxtensions",
  storageBucket: "vixxtensions.appspot.com",
  messagingSenderId: "320897438342",
  appId: "1:320897438342:web:ef83c3288d5038e0877707",
  measurementId: "G-B8G6NF6F2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);
const AUTH = getAuth(app)
const STORAGE = getStorage(app)


export default app
export {DATABASE, AUTH, STORAGE}
