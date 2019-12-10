import React from 'react';
import styled from 'styled-components';
import StarReview from '../starReview.jsx';

const StyledImg = styled.img`
    width: 180px;
    height: 180px;
    display: block;
    margin: 0 auto;
    :hover {
        transform: scale(1.1);
      }
`;

const StyledMainOuterDiv = styled.div`
padding: 2rem 1.5rem;
flex: 0 0 25%;
position: relative;
    width: 100%;
    min-height: 1px;
    line-height: 1.5;
`

const StyledMainInnerDiv = styled.div`
-webkit-font-smoothing: antialiased;
    max-width: 30rem;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1.5;
    word-break: break-word;
`

const StyledName = styled.div`
font-weight: 700;
`

const StyledPrice = styled.div`
font-weight: 700;
font-size: 1.5rem;
`

const Pairs = (props) => (
    <StyledMainOuterDiv>
        <StyledMainInnerDiv>
            <StyledImg src={props.data.imageSrc[0]} />
            <StyledName>{props.data.name}</StyledName>
            <div>{props.data.shortDesc.split(',')[0]}, {props.data.shortDesc.split(',')[1]}</div>
            <StyledPrice>${props.data.price}.00</StyledPrice>
            <span><StarReview rating={props.data.rating} reviewNum={props.data.reviewNum} /></span>
            <span>({props.data.reviewNum})</span>
        </StyledMainInnerDiv>
    </StyledMainOuterDiv>
)

export default Pairs;