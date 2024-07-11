import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/auth";
import { signOut } from "firebase/auth";

const Home = () => {
  
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  async function handleSignOut() {
    try {
      alert("signed out");
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  if (loading){
    return <h1>Loading...</h1>
  }

  return(
    <div className="text-center">
        hello {user.displayName}
        <br />
        <button type="button" className="bg-red-400" onClick={handleSignOut}>Logout</button>
    </div>
  )
    


};

export default Home;
