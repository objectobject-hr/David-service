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
                    <StarReview rating={props.data.rating} reviewNum={props.data.reviewNum} />
                </span>
                <span className="dk-reivewCount">
                    {props.data.reviewNum} Reviews
                </span>
            </div>
            <br />
            <span >{props.data.midDesc}</span>
            <span className="dk-readMore">
                Read More
            </span>
        </div>
        <div>

        </div>
    </div>

)

export default ProductDetail;
