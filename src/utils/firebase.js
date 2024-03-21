// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRGQBr0TUPduHuHV8fVGU1QTF_mAmqeR4",
  authDomain: "career-guidance-70843.firebaseapp.com",
  projectId: "career-guidance-70843",
  storageBucket: "career-guidance-70843.appspot.com",
  messagingSenderId: "86856890288",
  appId: "1:86856890288:web:cc1669e6ab9a24a6774875",
  measurementId: "G-96M0ZQKZ4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);