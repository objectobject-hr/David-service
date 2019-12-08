import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.div`
    padding-left: 150px;
    padding-right: 150px;
`;

const MainSlide = (props) => (

  <StyledImg>
    <img src={props.list} width="500" height="600" />
  </StyledImg>

)

export default MainSlide;