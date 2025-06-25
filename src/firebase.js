import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM86MEpZCEF-YKEQzHAvCHLtmeMARZ2HQ",
  authDomain: "grandmatale-ee719.firebaseapp.com",
  projectId: "grandmatale-ee719",
  storageBucket: "grandmatale-ee719.appspot.com",
  messagingSenderId: "90370801195",
  appId: "1:90370801195:web:4827a56ce8f043046c346e",
  measurementId: "G-1TT02Q8PZP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
