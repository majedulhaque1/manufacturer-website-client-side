// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-UmsVSGswIBjpZBo1EYeiHWRxG35UPYs",
  authDomain: "manufacturer-website-f037d.firebaseapp.com",
  projectId: "manufacturer-website-f037d",
  storageBucket: "manufacturer-website-f037d.appspot.com",
  messagingSenderId: "361010797481",
  appId: "1:361010797481:web:e75df9e6aa02ea924402b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;