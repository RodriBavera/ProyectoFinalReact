
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-63425.firebaseapp.com",
  projectId: "react-63425",
  storageBucket: "react-63425.firebasestorage.app",
  messagingSenderId: "17970701469",
  appId: "1:17970701469:web:5f09f6e3dbb96fa6a6a074"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);