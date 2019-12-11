import React from 'react';
import styled from 'styled-components';

let StyledArrow = styled.svg`
position: absolute;
    top: 27rem;
    right: 48rem;
    cursor: pointer;
    height: 22px;
    width: 22px;
`

const RightArrow = (props) => {
  return (
    <StyledArrow onClick={props.rightArrow}>

      <path d="M 12.29 18.37 l 1.42 1.4 L 21.41 12 L 13.7 4.36 L 12.3 5.78 L 17.57 11 H 4 v 2 H 17.6 Z"></path>

    </StyledArrow >
  );
}

export default RightArrow;