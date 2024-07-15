import React from 'react'

const UploadImage = ({imgSrc ,onButtonClick}) => {
  return (
    <button>
      <img
        src={imgSrc}
        alt="Profile"
        className="h-60 w-60 rounded-full mt-2 my-2 animate-fade"
        onClick={onButtonClick}
      />
    </button>
  );
}

export default UploadImage
