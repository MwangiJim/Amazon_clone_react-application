// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAtcQqSmwcbr-7C1PGzqMIzbtsscv7eyQ",
  authDomain: "clone-e8f68.firebaseapp.com",
  projectId: "clone-e8f68",
  storageBucket: "clone-e8f68.appspot.com",
  messagingSenderId: "1010034562680",
  appId: "1:1010034562680:web:79568eabfb68200ef4bf8d",
  measurementId: "G-H40TGRVB8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {db};