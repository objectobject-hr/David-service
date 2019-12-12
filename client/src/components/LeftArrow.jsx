import React from 'react';

const LeftArrow = (props) => {
  return (
    <svg className="dk-leftArrow" onClick={props.leftArrow}>
      <path d="M 11.7 18.22 L 6.43 13 H 20 V 11 H 6.4 l 5.31 -5.37 L 10.29 4.22 L 2.59 12 l 7.71 7.64 Z"></path>
    </svg>
  );
}

export default LeftArrow;