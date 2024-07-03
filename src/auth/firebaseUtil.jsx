import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
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

export const app = initializeApp(firebase);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const logIn = () => {
  // makes sure the users signs in with a up mail.
  googleProvider.setCustomParameters({
    hd: "up.edu.ph",
    prompt: "select_account",
  });

  signInWithRedirect(auth, googleProvider);
};

export const AuthStateChangeHandler = () => {
  const navigate = useNavigate();

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log(user.email);
      navigate("/userPage"); 
    } else {
      console.log("signed-out!");
    }
  });

  return null;
};

export const logOut = () => {
  signOut(auth);
};


