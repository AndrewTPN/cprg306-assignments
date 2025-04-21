
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  
const firebaseConfig = {
  apiKey: "AIzaSyBQKYTq2bJ1uIL0P1BLuic-jpbJKL7WGV0",
  authDomain: "cprg306-assignments-6f0ed.firebaseapp.com",
  projectId: "cprg306-assignments-6f0ed",
  storageBucket: "cprg306-assignments-6f0ed.firebasestorage.app",
  messagingSenderId: "251765711596",
  appId: "1:251765711596:web:157ba79781a16b1d703bc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);  // Add this line to create auth instance

// Export auth so it can be imported elsewhere
export { auth };  // Add this export

export const db = getFirestore(app);