import React from 'react';
import StarReview from '../starReview.jsx';

const Pairs = (props) => (
    <div className="dk-mainOuterDiv">
        <div className="dk-mainInnerDiv">

            <img key={props.data} className="dk-productImage" src={props.data.imageSrc[0]} />
            <div key={props.data} className="dk-productName">{props.data.name}</div>
            <div style={{ cursor: 'pointer' }}>{props.data.shortDesc.split(',')[0]}, {props.data.shortDesc.split(',')[1]}</div>
            <div className="dk-pairsPrice ">${props.data.price}.00</div>

            <span><StarReview rating={props.data.rating} reviewNum={props.data.reviewNum} /></span>
            <span>({props.data.reviewNum})</span><br />
            <button className="dk-outterCartButton">
                <span className="dk-cartButtonSpan"></span>
                <span className="dk-cartButtonIcon">
                    <svg className="dk-cartIconSvg">
                        <path d="M20 14v2h2v2h-2v2h-2v-2h-2v-2h2v-2h2zM12 4c2.8 0 5 2.2 5 5h5l-1 4h-2.1l.5-2H4.6l1.9 7H15v2H5L2 9h5c0-2.8 2.2-5 5-5zM9 9h6c0-1.7-1.3-3-3-3S9 7.3 9 9z">
                        </path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
)

export default Pairs;