import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlaceHolder from "../assets/placeholder.jpg";
import { doc, setDoc } from "firebase/firestore";
import Error from "./Error";
import Loader from "./Loader";
import { db } from "../firebase/db";

const CreateProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profileUploadRef = useRef();

  const { handle, userId } = location.state;
  const [profile, setProfile] = useState(PlaceHolder);
  const [isProfileEmpty, setIsProfileEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsProfileEmpty(profile === PlaceHolder);
  }, [profile]);

  async function createUser(handle, icon, uid) {
    setIsLoading(true);
    try {
      const usersRef = doc(db, "users", uid);
      const user = {
        userHandle: handle,
        userProfile: icon,
      };
      await setDoc(usersRef, user);
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  if (isError) {
    return (
      <div className="animate-fade">
        <Error />
      </div>
    );
  }

  if (isLoading){
    return <Loader/>
  }

  return (
    <div className="flex flex-col justify-center place-items-center h-screen items-center ">
      <div className="text-center mb-5">
        <div className="flex flex-col justify-center place-items-center relative">
          <button>
            <img
              src={profile}
              alt="Profile"
              className="h-60 w-60 rounded-full mt-2 my-2 animate-fade"
              onClick={() => profileUploadRef.current.click()}
            />
          </button>
          <input
            type="file"
            ref={profileUploadRef}
            accept="image/jpeg"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file && file.type === "image/jpeg") {
                setProfile(URL.createObjectURL(file));
              }
            }}
            hidden
          />
          {!isProfileEmpty && (
            <>
              <div className="flex gap-2">
                <button
                  className="animate-fade cursor-pointer transition-all bg-black text-white px-4 py-2
              border-black rounded-md border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                  onClick={() => setProfile(PlaceHolder)}
                >
                  Clear
                </button>
                <button
                  className="animate-fade cursor-pointer transition-all bg-black text-white px-4 py-2
              border-black rounded-md border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                  onClick={() => createUser(handle, profile, userId)}
                >
                  Create Profile
                </button>
              </div>
            </>
          )}
          {isProfileEmpty && (
            <h1 className="animate-fade">
              Let's add an icon for you {handle}!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
