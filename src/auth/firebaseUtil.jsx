import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebase = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "iskoxpress.firebaseapp.com",
  projectId: "iskoxpress",
  storageBucket: "iskoxpress.appspot.com",
  messagingSenderId: "547003784449",
  appId: "1:547003784449:web:432a75c6a935409541cf00",
  measurementId: "G-XC2M0ZZ7W2",
};
initializeApp(firebase);

export const auth = getAuth();

export const logIn = () => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters(
    { prompt: "select_account" 

    });
  signInWithPopup(auth, googleProvider);
};

auth.onAuthStateChanged((user)=>{
  if (user){
    console.log(user.email)
  } else {
    console.log("signed-out");
  }
})


export const logOut = () => {
  signOut(auth);
};



