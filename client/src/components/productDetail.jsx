import React from 'react';

const ProductDetail = (props) => (
    <div>
        <div><h3>
            {props.data.name}
        </h3></div>
        <div>{props.data.shortDesc}</div>
        <div><h1>${props.data.price}.00</h1></div>
        <div>{props.data.rating}</div>
        <div>{props.data.reviewNum} Reviews</div><br />
        <div>{props.data.midDesc}</div>
    </div>
)



export default ProductDetail;