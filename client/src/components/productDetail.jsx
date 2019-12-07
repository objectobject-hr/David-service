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
            <div display="flex">
                <span>
                    <StarReview rating={props.data.rating} />
                    {props.data.reviewNum} Reviews
                </span>
            </div>
            <br />
            <div>{props.data.midDesc}</div>
        </div>
        <div>

        </div>
    </div>

)



export default ProductDetail;
