/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_TcTYLE1aL-wGuDH25lHR6T9d8D0TV1o",
  authDomain: "timer-47eb7.firebaseapp.com",
  projectId: "timer-47eb7",
  storageBucket: "timer-47eb7.appspot.com",
  messagingSenderId: "111914621615",
  appId: "1:111914621615:web:8cba037461de533afad25a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;