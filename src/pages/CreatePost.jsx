import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../components/buttons/CommonButton"
import { auth } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {

  const [user, loading, error] = useAuthState(auth);
  const [value,setValue] = useState('');

  return (
    <>
      <div className="mobile:p-10 animate-fade">

        <div className="flex items-center mobile:mb-3">
          <Link to="/home" className="mr-4">
            <button type="button">
              <IoArrowBackOutline color="black" size={25} />
            </button>
          </Link>
          <div className="text-lg font-semibold mb-2">Express Something</div>
        </div>

        <div className="mobile:mt-2 mobile:mb-2">
          <ReactQuill theme="snow" onChange={setValue}/>
        </div>

        <div className="flex flex-col items-center ">
          <Button text="Express Your Thoughts" />
        </div>

      </div>
    </>
  );
};

export default CreatePost;
