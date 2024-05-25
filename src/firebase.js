// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC48zvJG3AhCRyOStOFbyrlv1TYxMRf10U",
  authDomain: "walmart-609ff.firebaseapp.com",
  projectId: "walmart-609ff",
  storageBucket: "walmart-609ff.appspot.com",
  messagingSenderId: "808894233278",
  appId: "1:808894233278:web:165dcb6eb0e6d5a0883cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export { app, db, auth }; 