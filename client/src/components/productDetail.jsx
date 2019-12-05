import React from 'react';
import StarReview from './starReview.jsx';

const ProductDetail = (props) => (
    <div>
        <div>
            <div><h3>
                {props.data.name}
            </h3></div>
            <div>{props.data.shortDesc}</div>
            <div><h1>${props.data.price}.00</h1></div>
            <StarReview rating={props.data.rating} />
            <div>{props.data.reviewNum} Reviews</div><br />
            <div>{props.data.midDesc}</div>
        </div>
        <div>

        </div>
    </div>

)



export default ProductDetail;

//https://www.ikea.com/us/en/resources/svg/rating-star.6a2641a7f1dad122.svg

//https://www.ikea.com/us/en/resources/svg/rating-star-empty.ef7993798f794919.svg