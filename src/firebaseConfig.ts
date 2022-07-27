import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPSbhQ_I9HtKsDRmv1M3EaOsyVzZXvQ1A",
  authDomain: "pingsgg-bde0a.firebaseapp.com",
  projectId: "pingsgg-bde0a",
  storageBucket: "pingsgg-bde0a.appspot.com",
  messagingSenderId: "271909540041",
  appId: "1:271909540041:web:648115c9599d748e80fd18",
  measurementId: "G-VHRSX07DZR"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 


