import React from "react";

const Error = () => {
  return (
    
    <div class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center pt-20">
        <p class="text-base font-semibold text-red-400">404</p>
        <h1 class="mt-4 text-3xl font-mono font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p class="font-extralight mt-2 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </div>
  );
};

export default Error;
