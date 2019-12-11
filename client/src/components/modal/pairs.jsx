import React from 'react';
import styled from 'styled-components';
import StarReview from '../starReview.jsx';

const StyledImg = styled.img`
    width: 180px;
    height: 180px;
    display: block;
    transition-duration: .3s;
transition-timing-function: cubic-bezier(0.4, 0, 0, 1);
    :hover {
        transform: scale(1.05);
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
const StyledButton = styled.button`
margin: 1rem 0.5rem 0.5rem;
    outline: 0;
    background: rgba(0,0,0,0);
    border-radius: 50%;
    padding: .75rem;
    line-height: 0;
    position: relative;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    transition-property: background-color,border-radius,width;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0, 1);
    cursor: pointer;
`

const StyledAddToCartButton = styled.span`
background-color: #dfdfdf;
transform: scale(1);
position: absolute;
left: 0;
top: 0;
display: block;
border-radius: 50%;
width: 100%;
height: 100%;
transition-duration: .3s;
transition-timing-function: cubic-bezier(0.4, 0, 0, 1);
cursor: pointer;
`

const StyledButtonIcon = styled.span`
display: block;
height: 1.5rem;
width: 1.5rem;
line-height: 0;
cursor: pointer;
`

const StyledIconSvg = styled.svg`
width: 1.5rem;
    height: 1.5rem;
    left: 26%;
    position: absolute;
`

const Pairs = (props) => (
    <StyledMainOuterDiv>
        <StyledMainInnerDiv>
            <StyledImg src={props.data.imageSrc[0]} />
            <StyledName>{props.data.name}</StyledName>
            <div>{props.data.shortDesc.split(',')[0]}, {props.data.shortDesc.split(',')[1]}</div>
            <StyledPrice>${props.data.price}.00</StyledPrice>
            <span><StarReview rating={props.data.rating} reviewNum={props.data.reviewNum} /></span>
            <span>({props.data.reviewNum})</span><br />
            <StyledButton>
                <StyledAddToCartButton></StyledAddToCartButton>
                <StyledButtonIcon>
                    <StyledIconSvg>
                        <path d="M20 14v2h2v2h-2v2h-2v-2h-2v-2h2v-2h2zM12 4c2.8 0 5 2.2 5 5h5l-1 4h-2.1l.5-2H4.6l1.9 7H15v2H5L2 9h5c0-2.8 2.2-5 5-5zM9 9h6c0-1.7-1.3-3-3-3S9 7.3 9 9z">
                        </path>
                    </StyledIconSvg>
                </StyledButtonIcon>
            </StyledButton>
        </StyledMainInnerDiv>
    </StyledMainOuterDiv>
)

export default Pairs;