import React, { useState } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../components/buttons/CommonButton";
import { auth } from '../firebase/auth';
import { signOut } from 'firebase/auth';

const Profile = () => {

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSignOut(){
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="mobile:p-10 animate-fade">
      <div className="flex items-center mobile:mb-3">
        <Link to="/home" className="mr-4">
          <button type="button">
            <IoArrowBackOutline color="black" size={25} />
          </button>
        </Link>
        <div className="text-lg font-semibold mb-2">Edit Your Profile</div>
      </div>
      <div className="flex flex-col items-center ">
        <Button text="Log out" onButtonClick={handleSignOut} />
      </div>
    </div>
  );
}

export default Profile
