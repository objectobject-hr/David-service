import React from 'react';
import styled from 'styled-components';

const StyledOuterMostDiv = styled.div`
font-size: .875rem;
line-height: 2rem;
cursor: pointer;
background-color: #fff;
`

const StyledDiv = styled.div`
background-color: #fff;
padding: .5rem;
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    text-align: left;
    width: 100%;
    font-size: 1rem;
    :hover {
        background-color: #F8F8F8;
      }
`

const StyledSpan = styled.span`
align-items: center;
display: flex;
color: #111;
text-align: left;
font-size: 1rem;
`

const StyledSvg = styled.svg`
margin-right: .5rem;
width: 2rem;
height: 2rem;
display: inline-block;
vertical-align: middle;
fill: #111;
transition-property: transform,fill,-webkit-transform;
transition-duration: .3s;
transition-timing-function: cubic-bezier(.4,0,0,1);
`

const StyledAvailableSpan = styled.span`
margin-right: .5rem;
width: 1rem;
height: 1rem;
display: inline-block;
vertical-align: middle;
fill: #111;
transition-property: transform,fill,-webkit-transform;
transition-duration: .3s;
transition-timing-function: cubic-bezier(.4,0,0,1);
background-image: url(https://www.ikea.com/us/en/resources/svg/product-availability/stock-high-thin-24.50443bcac2b4be21.svg);
`

const StyledButtonSvg = styled.svg`
flex-shrink: 0;
width: 1.5rem;
height: 1.5rem;
display: inline-block;
vertical-align: middle;
focusable: false;
viewBox: 0 0 24 24;
`

const StyledDetailDelivery = styled.div`
padding: .5rem;
font-size: .875rem;
line-height: 1.125rem;
border-bottom: 1px solid #ccc;
`



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
                <StyledOuterMostDiv style={{ 'borderBottom': '1px solid #ccc' }}>
                    <StyledDiv onClick={() => { this.deliveryHandler() }}>
                        <StyledSpan>
                            <StyledSvg>
                                <path d="M20,12,17,9H14V7H2V17H4a2,2,0,0,0,4,0h8a2,2,0,0,0,4,0h2V12.82ZM8,16H7.72A2,2,0,0,0,5,15.26a2,2,0,0,0-.74.74H3V8H13v8Zm13,0H19.72a2,2,0,0,0-2.7-.74,2,2,0,0,0-.74.74H14V10h2.59l2.7,2.71.15.14.18.08,1.38.56Z">
                                </path>
                            </StyledSvg>
                            <StyledAvailableSpan ></StyledAvailableSpan>
                            Available for delivery
                    </StyledSpan>
                        <StyledButtonSvg>
                            <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z">
                            </path>
                        </StyledButtonSvg>
                    </StyledDiv>
                </StyledOuterMostDiv>
            )
        } else {
            return (
                <div>
                    <StyledOuterMostDiv>
                        <StyledDiv onClick={() => { this.deliveryHandler() }}>
                            <StyledSpan>
                                <StyledSvg>
                                    <path d="M20,12,17,9H14V7H2V17H4a2,2,0,0,0,4,0h8a2,2,0,0,0,4,0h2V12.82ZM8,16H7.72A2,2,0,0,0,5,15.26a2,2,0,0,0-.74.74H3V8H13v8Zm13,0H19.72a2,2,0,0,0-2.7-.74,2,2,0,0,0-.74.74H14V10h2.59l2.7,2.71.15.14.18.08,1.38.56Z">
                                    </path>
                                </StyledSvg>
                                <StyledAvailableSpan ></StyledAvailableSpan>
                                Available for delivery
                    </StyledSpan>
                            <StyledButtonSvg style={{ transform: `rotate(180deg)` }}>
                                <path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z">
                                </path>
                            </StyledButtonSvg>
                        </StyledDiv>
                    </StyledOuterMostDiv>
                    <StyledDetailDelivery>
                        <span>Add to cart for delivery details.</span>
                    </StyledDetailDelivery>
                </div>
            )
        }
    }
}

export default DeliveryButton;