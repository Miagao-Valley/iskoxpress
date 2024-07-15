import React from "react";

const Loader3 = () => {
  return (
    <div class="flex space-x-2 justify-center items-center bg-white h-[385px]">
      <span class="sr-only">Loading...</span>
      <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader3;
