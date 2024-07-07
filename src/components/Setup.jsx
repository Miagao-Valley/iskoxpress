
import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';


const Setup = () => {

  const navigate = useNavigate();

  function handleSignOut(){
    signOut(auth);
  }

  return (
    <>
      <div>Hello</div>
      <button onClick={handleSignOut} className='rounded-sm bg-red-500 text-white'>Log out</button>
    </>
  );
}

export default Setup
