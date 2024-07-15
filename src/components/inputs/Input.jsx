import React from 'react'

const Input = ({inputType, inputRef, onInputChange, inputAccept, isHidden, inputValue, inputClass}) => {
  return (
    <input
      type={inputType}
      value={inputValue}
      ref={inputRef}
      accept={inputAccept}
      onChange={onInputChange}
      hidden = {isHidden}
      className={inputClass}
    />
  );
}

export default Input
