import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBj03XX8y_mQkRgH8l25c9CXcZ7pf9Ky7I",
  authDomain: "socialfamilybr.firebaseapp.com",
  projectId: "socialfamilybr",
  storageBucket: "socialfamilybr.appspot.com",
  messagingSenderId: "216365126444",
  appId: "1:216365126444:web:657d1fb2a41ac3e91a5289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}