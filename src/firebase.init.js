
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTO4GKszdwsKEZE0wpP7_2yuVU1-T-q_w",
  authDomain: "laptop-warehouse-auth.firebaseapp.com",
  projectId: "laptop-warehouse-auth",
  storageBucket: "laptop-warehouse-auth.appspot.com",
  messagingSenderId: "468974379316",
  appId: "1:468974379316:web:c0e95ab575ec3cef5ec561",
  measurementId: "G-WDZ2E4B7CS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;