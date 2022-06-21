// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMrUB5CirJ6-541PwGVYOTqFCDmoxPRcc",
  authDomain: "netflixclone-2dc0f.firebaseapp.com",
  projectId: "netflixclone-2dc0f",
  storageBucket: "netflixclone-2dc0f.appspot.com",
  messagingSenderId: "216510291307",
  appId: "1:216510291307:web:82f387d29d1971a30b802e",
  measurementId: "G-MK1R0KJ7VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app)