import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {

  const navigate = useNavigate();

  return (
    <main className="animate-fade grid min-h-full place-items-center px-6 py-24 mobile:mt-20 sm:mt-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-pl-5">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            onClick={() => navigate("/")}
            className="cursor-pointer transition-all bg-black text-white px-4 py-2
        border-black  rounded-md
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
};

export default Error;
