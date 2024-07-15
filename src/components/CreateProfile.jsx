import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PlaceHolder from "../assets/placeholder.jpg";
import { doc, setDoc } from "firebase/firestore";
import Error from "./Error";
import Loader from "./loaders/Loader";
import { db } from "../firebase/db";
import UploadImage from "./buttons/UploadImage";
import CommonButton from "./buttons/CommonButton";
import Input from "./inputs/Input";

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
      setIsError(true)
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col justify-center place-items-center h-screen items-center ">
      <div className="text-center mb-5">
        <div className="flex flex-col justify-center place-items-center relative">
          <UploadImage
            imgSrc={profile}
            onButtonClick={() => profileUploadRef.current.click()}
          />
          <Input
            inputType={"file"}
            inputRef={profileUploadRef}
            inputAccept={"image/jpeg"}
            onInputChange={(e) => {
              const file = e.target.files[0];
              if (file && file.type === "image/jpeg") {
                setProfile(URL.createObjectURL(file));
              }
            }}
            isHidden={"hidden"}
          />
          {!isProfileEmpty && (
            <>
              <div className="flex gap-2">
                <CommonButton
                  onButtonClick={() => setProfile(PlaceHolder)}
                  text={"Clear"}
                />
                <CommonButton
                  onButtonClick={() => createUser(handle, profile, userId)}
                  text={"Create Profile"}
                />
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
