// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU9SNcSOw_vsCo0Vu_L6HMdrzqSvlpqJY",
  authDomain: "superminicars-23.firebaseapp.com",
  projectId: "superminicars-23",
  storageBucket: "superminicars-23.appspot.com",
  messagingSenderId: "797366333819",
  appId: "1:797366333819:web:2434e59be5342c2e054dde",
  measurementId: "G-PN0BJ6BTK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
