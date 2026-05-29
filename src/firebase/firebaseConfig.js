import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0pi8jp4-H5GPFTjonHYtGpdm5rFLsOQw",
  authDomain: "sales-card-4c69f.firebaseapp.com",
  projectId: "sales-card-4c69f",
  storageBucket: "sales-card-4c69f.firebasestorage.app",
  messagingSenderId: "565473638756",
  appId: "1:565473638756:web:22fe5384fd6ffba9dbe271"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);