import React from 'react';
import styled from 'styled-components';

let StyledArrow = styled.div`
position: absolute;
    padding: 5px;
    top: 50%;
    right: 25px;
    z-index: 999;
    background-color:lightblue;
`

const RightArrow = (props) => {
  return (
    <StyledArrow>
      <div className="nextArrow arrow" onClick={props.rightArrow}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    </StyledArrow>
  );
}

export default RightArrow;