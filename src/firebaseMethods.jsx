import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";



const firebase = {
  apiKey: "import.meta.env.VITE_API_KEY",
  authDomain: "iskoxpress.firebaseapp.com",
  projectId: "iskoxpress",
};

export const app = initializeApp(firebase);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const googleLogin = () => {
  // makes sure the users signs in with a up mail.
  provider.setCustomParameters({
    hd: "up.edu.ph",
  });

  signInWithRedirect(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

auth.onAuthStateChanged((user)=>{
  if (user){
    var email = user.email;
    console.log("User:" + email + "is signed in" );

  } else {
    console.log("signed-out!")
  }
})
