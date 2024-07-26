import React from 'react'

import { FaRegComment } from "react-icons/fa";
import { LuFlower } from "react-icons/lu";
import { FiShare } from "react-icons/fi";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/db';
console.log("Hi");



const Posts = ({user}) => {



  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="font-bold text-[15px] mb-2">{user.email}</h1>
      <p className="font-normal text-gray-700 dark:text-gray-400 break-words text-[10px] mb-4">
        Lorem ipsum dolor sit amet blablabalbalbalbasdada
        aadsadadasdadasdadsdaddasadasdadaaadad
      </p>
      <div className="flex gap-3">
        <LuFlower size={10} />
        <FaRegComment size={10} />
        <FiShare size={10} />
      </div>
    </div>
  );
}

export default Posts
