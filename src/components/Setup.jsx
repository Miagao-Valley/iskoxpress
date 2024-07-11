import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/auth";
import { db } from "../firebase/db";
import { doc, getDoc} from "firebase/firestore";

import Error from "./Error";
import WelcomeUser from "./WelcomeUser";

import Loader from "./Loader";

const Setup = () => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const [checkingUser, setCheckingUser] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (user) {
          setCheckingUser(true);
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            navigate("/home");
          } else {
            setCheckingUser(false);
          }
        } else {
          setCheckingUser(false);
        }
      } catch (error) {
        setIsError(true);
      }
    })();
  }, [user, navigate]);



  if (isError) {
    return <Error />;
  }

  if (isLoading || checkingUser) {
    return (
      <Loader/>
    );
  }



  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <WelcomeUser userId={user.uid}/>
      </div>
    </>
  );
};

export default Setup;
