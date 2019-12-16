import React from "react";
import StarReview from "./starReview.jsx";

const ProductDetail = props => (
  <div>
    <div>
      <div className="dk-productDetailName">{props.data.name}</div>
      <div style={{ lineHeight: 2.3, WebkitUserSelect: "none" }}>
        {props.data.shortDesc}
      </div>
      <div className="dk-productPrice">${props.data.price}.00</div>
      <div
        display="flex"
        style={{
          paddingBottom: "0.5rem",
          display: "flex",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        <span>
          <StarReview
            rating={props.data.rating}
            reviewNum={props.data.reviewNum}
          />
        </span>
        <span className="dk-reviewCount">{props.data.reviewNum} Reviews</span>
      </div>
      <span style={{ lineHeight: 1.4 }}>{props.data.midDesc}</span>
      <span className="dk-readMore">Read More</span>
    </div>
    <div></div>
  </div>
);

export default ProductDetail;
