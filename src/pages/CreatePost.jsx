import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import jake from "../assets/jake.jpg";
import Button from "../components/buttons/CommonButton"
import { auth } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const CreatePost = () => {

  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <div className="mobile:p-10 animate-fade">
        <div className="flex items-center">
          <Link to="/home" className="mr-4">
            <button type="button">
              <IoArrowBackOutline color="black" size={25} />
            </button>
          </Link>
          <div className="text-lg font-semibold mb-2">Express Something</div>
        </div>

        <div className="mobile:mt-3 flex">
          <img
            src={jake}
            alt=""
            className="rounded-full mobile:w-[20%] mobile:h-[20%]"
          />
          <div className="ml-3 mt-2 flex flex-col">
            <h2 className="font-semibold">{user ? user.email : "null"}</h2>
            <p className="text-[12px]">@username</p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <form action="">
           
          </form>
        </div>
        <div className="flex flex-col items-center ">
          <Button text="Express Your Thoughts" />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
