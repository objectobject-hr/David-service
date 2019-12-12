import React from 'react';

class DeliveryButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }

    deliveryHandler() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        if (this.state.clicked === false) {
            return (
                <div className="dk-deliveryOuterDiv" style={{ 'borderBottom': '1px solid #ccc' }}>
                    <div className="dk-deliveryInnerDiv" onClick={() => { this.deliveryHandler() }}>
                        <span className="dk-deliverySpan">
                            <svg className="dk-deliverySvg">
                                <path d="M20,12,17,9H14V7H2V17H4a2,2,0,0,0,4,0h8a2,2,0,0,0,4,0h2V12.82ZM8,16H7.72A2,2,0,0,0,5,15.26a2,2,0,0,0-.74.74H3V8H13v8Zm13,0H19.72a2,2,0,0,0-2.7-.74,2,2,0,0,0-.74.74H14V10h2.59l2.7,2.71.15.14.18.08,1.38.56Z">
                                </path>
                            </svg>
                            <span className="dk-deliveryAvailableSpan" ></span>
                            Available for delivery
                        </span>
                        <svg className="dk-deliveryButton">
                            <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z">
                            </path>
                        </svg>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="dk-deliveryOuterDiv">
                        <div className="dk-deliveryInnerDiv" onClick={() => { this.deliveryHandler() }}>
                            <span className="dk-deliverySpan">
                                <svg className="dk-deliverySvg">
                                    <path d="M20,12,17,9H14V7H2V17H4a2,2,0,0,0,4,0h8a2,2,0,0,0,4,0h2V12.82ZM8,16H7.72A2,2,0,0,0,5,15.26a2,2,0,0,0-.74.74H3V8H13v8Zm13,0H19.72a2,2,0,0,0-2.7-.74,2,2,0,0,0-.74.74H14V10h2.59l2.7,2.71.15.14.18.08,1.38.56Z">
                                    </path>
                                </svg>
                                <span className="dk-deliveryAvailableSpan" ></span>
                                Available for delivery
                            </span>
                            <svg className="dk-deliveryButton" style={{ transform: `rotate(180deg)` }}>
                                <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="dk-detailDelivery">
                        <span>Add to cart for delivery details.</span>
                    </div>
                </div>
            )
        }
    }
}

export default DeliveryButton;