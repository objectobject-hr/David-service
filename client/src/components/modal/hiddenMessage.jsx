import React from "react";

const HiddenMessage = props => (
  <div
    className="dk-hiddenMsg"
    style={{
      marginBottom: `${props.quantity <= 0 ? "1rem" : "0rem"}`,
      maxHeight: `${props.quantity <= 0 ? "5em" : "0em"}`,
      opacity: `${props.quantity <= 0 ? "1" : "0"}`,
      paddingTop: `${props.quantity <= 0 ? "0.5em" : "0em"}`
    }}
  >
    <span className="dk-hiddenSpan">
      <svg viewBox="0 0 16 16">
        <g>
          <path fill="#E00751" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          <path
            fill="#FFF"
            d="M9.45 8.036L11.414 10 10 11.414 8.036 9.45 6.07 11.414 4.657 10l1.964-1.964L4.5 5.914 5.914 4.5l2.122 2.121 2.12-2.121 1.415 1.414L9.45 8.036z"
          />
        </g>
      </svg>
    </span>
    Please enter a quantity between 1-999
  </div>
);

export default HiddenMessage;
