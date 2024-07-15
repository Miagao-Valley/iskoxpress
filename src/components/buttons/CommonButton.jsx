import React from 'react'

const CommonButton = ({onButtonClick, text}) => {
  return (
    <button
      className="animate-fade cursor-pointer transition-all bg-black text-white px-4 py-2
              border-black rounded-md border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}

export default CommonButton
