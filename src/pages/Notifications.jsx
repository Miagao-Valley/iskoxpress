import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <div className="mobile:p-10 animate-fade">
      <div className="flex items-center mobile:mb-3">
        <Link to="/home" className="mr-4">
          <button type="button">
            <IoArrowBackOutline color="black" size={25} />
          </button>
        </Link>
        <div className="text-lg font-semibold mb-2">Notifications</div>
      </div>
    </div>
  );
};

export default Notifications;
