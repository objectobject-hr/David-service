import React from 'react';
import StarReview from './starReview.jsx';
import styled from 'styled-components';

const StyledReadMore = styled.span`
text-decoration: underline;
color: #0058a3;
cursor: pointer;
`

const StyledReviewCount = styled.span`
color: #0058a3;
:hover {
    text-decoration: underline;
  }
`

const ProductDetail = (props) => (
    <div>
        <div>
            <div><h3>
                {props.data.name}
            </h3></div>
            <div>{props.data.shortDesc}</div>
            <div><h1>${props.data.price}.00</h1></div>
            <div display="flex">
                <span>
                    <StarReview rating={props.data.rating} reviewNum={props.data.reviewNum} />
                </span>
                <StyledReviewCount>
                    {props.data.reviewNum} Reviews
                </StyledReviewCount>
            </div>
            <br />
            <span >{props.data.midDesc}</span>
            <StyledReadMore>
                Read More
            </StyledReadMore>
        </div>
        <div>

        </div>
    </div>

)

export default ProductDetail;
