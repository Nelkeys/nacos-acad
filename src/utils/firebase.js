import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt8ZEJDI7wfi0jvQDY4qMx49MMtE1in_E",
  authDomain: "academia-56566.firebaseapp.com",
  databaseURL: "https://academia-56566-default-rtdb.firebaseio.com",
  projectId: "academia-56566",
  storageBucket: "academia-56566.firebasestorage.app",
  messagingSenderId: "578752731789",
  appId: "1:578752731789:web:dbd67a93d25d095d5b60c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, query, where };
