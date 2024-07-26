import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiPersonSimpleHikeDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="flex justify-around p-4">
      <Link to="/home">
        <button className="text-gray-700 dark:text-gray-400">
          <IoHomeOutline color="black" size={20} />
        </button>
      </Link>
      <Link to="/notifications">
        <button className="text-gray-700 dark:text-gray-400">
          <IoNotificationsOutline color="black" size={20} />
        </button>
      </Link>
      <Link to="/profile">
        <button className="text-gray-700 dark:text-gray-400">
          <PiPersonSimpleHikeDuotone color="black" size={20} />
        </button>
      </Link>
    </nav>
  );
}

export default BottomNav
