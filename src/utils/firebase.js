// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfIS9B0x_diYcdrfs450Ex_hoDP1Xm7D0",
  authDomain: "netflixgpt-c6092.firebaseapp.com",
  projectId: "netflixgpt-c6092",
  storageBucket: "netflixgpt-c6092.firebasestorage.app",
  messagingSenderId: "967017106500",
  appId: "1:967017106500:web:c1da707a46db8dbbc70011",
  measurementId: "G-G38N97GQ1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();