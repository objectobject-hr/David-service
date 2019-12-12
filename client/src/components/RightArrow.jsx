import React from 'react';

const RightArrow = (props) => {
  return (
    <svg className="dk-rightArrow" onClick={props.rightArrow}>

      <path d="M 12.29 18.37 l 1.42 1.4 L 21.41 12 L 13.7 4.36 L 12.3 5.78 L 17.57 11 H 4 v 2 H 17.6 Z"></path>

    </svg >
  );
}

export default RightArrow;