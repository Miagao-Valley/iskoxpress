import { initializeApp } from "firebase/app";

const firebase = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "iskoxpress.firebaseapp.com",
  projectId: "iskoxpress",
  storageBucket: "iskoxpress.appspot.com",
  messagingSenderId: "547003784449",
  appId: "1:547003784449:web:432a75c6a935409541cf00",
  measurementId: "G-XC2M0ZZ7W2",
};

export const app = initializeApp(firebase);

