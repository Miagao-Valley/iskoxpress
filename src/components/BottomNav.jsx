import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiPersonSimpleHikeDuotone } from "react-icons/pi";

const BottomNav = () => {
  return (
    <nav className="flex justify-around p-4">
      <a href="#" className="text-gray-700 dark:text-gray-400">
        <IoHomeOutline color="black" size={20} />
      </a>

      <a href="#" className="text-gray-700 dark:text-gray-400">
        <IoNotificationsOutline color="black" size={20} />
      </a>
      <a href="#" className="text-gray-700 dark:text-gray-400">
        <PiPersonSimpleHikeDuotone color="black" size={20} />
      </a>
    </nav>
  );
}

export default BottomNav
