import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDpXEUdy4MfM-oYNMgZma5DIU-qLzfOz3s",
    authDomain: "ecom-clothing-a0e30.firebaseapp.com",
    projectId: "ecom-clothing-a0e30",
    storageBucket: "ecom-clothing-a0e30.appspot.com",
    messagingSenderId: "66853630321",
    appId: "1:66853630321:web:ad5f64c8153112f4ff06d0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 

