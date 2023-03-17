import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmJ2_J32LSd1R2UfMzX40z1f-PuFVdLg",
  authDomain: "registration-form-ffcfe.firebaseapp.com",
  databaseURL: "https://registration-form-ffcfe-default-rtdb.firebaseio.com",
  projectId: "registration-form-ffcfe",
  storageBucket: "registration-form-ffcfe.appspot.com",
  messagingSenderId: "667885496",
  appId: "1:667885496:web:da67af97ce7c52ccccb94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);