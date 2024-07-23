import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/auth";
import Loader3 from "../components/loaders/Loader3";

import BottomNav from "../components/BottomNav";
import Posts from "../components/Posts";
import TopNav from "../components/TopNav";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Loader3 />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {error.message}
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="mobile:p-10">
          <TopNav user={user} />
          <section className="mt-10">
            <Posts user={user} />
          </section>
          <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <BottomNav user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
