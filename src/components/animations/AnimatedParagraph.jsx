import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const AnimatedParagraph = () => {
  return (
    <TypeAnimation
      sequence={[
        "A safe heaven for UPV students to express their thoughts",
        1000,
      ]}
      wrapper="p"
      speed={50}
      style={{
        fontSize: "15px",
        display: "inline-block",
        fontFamily: "monospace",
      }}
      repeat={Infinity}
    />
  );
}

export default AnimatedParagraph
