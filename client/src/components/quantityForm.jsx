import React from 'react';
import styled from 'styled-components';


const StyledMinusButton = styled.button`
padding: .6rem;
position: absolute;
    top: 50%;
    left:1%;
    transform: translateY(-50%);
    cursor: pointer;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    transition-property: background-color,border-radius,width;
    
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
`

const StyledMinusSpan = styled.span`
text-align: center;
font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
`

const StyledMinusSvg = styled.svg`
display: inline-block;
height: 1.5rem;
width: 1.5rem;
vertical-align: top;
cursor: pointer;
text-align: center;
font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    focusable:false;
    viewBox:0 0 24 24;
`

const StyledInput = styled.input`
text-align: center;
font-family: inherit;
    font-size: 1rem;
max-width: 100%;
padding: 1rem 0.05rem;
display: block;
width: 100%;
margin: 0;
outline: 0;
border: 1px solid #959595;
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px transparent;
`

const StyledPlusButton = styled.button`
padding: .6rem;
position: absolute;
    top: 50%;
    left: 72%;
    transform: translateY(-50%);
    
    cursor: pointer;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    transition-property: background-color,border-radius,width;

    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;

`

const StyledPlusSpan = styled.span`
text-align: center;
font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    
    
    letter-spacing: normal;
    word-spacing: normal;
`

const StyledPlusSvg = styled.svg`
display: inline-block;
height: 1.5rem;
width: 1.5rem;
vertical-align: top;
cursor: pointer;
text-align: center;
font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    
`

const StyledHiddenMsg = styled.div`
align-items: center;
color: #666;
display: flex;
font-size: .875rem;
position: relative;
transition: max-height .4s ease-in-out,padding .4s ease-in-out,opacity .4s linear,margin .4s linear;
`

const StyledHiddenSpan = styled.span`
margin-right: .5rem;
width: 1rem;
    height: 1rem;
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    background-position: 50%;
`

class QuantityForm extends React.Component {
    constructor() {
        super()

        this.state = {
            quantity: 1,
        }
        this.increaseQuantity = this.increaseQuantity.bind(this)
        this.decreaseQuantity = this.decreaseQuantity.bind(this)
        this.quantityHandler = this.quantityHandler.bind(this)
    }

    increaseQuantity(e) {
        e.preventDefault();
        if (this.state.quantity < 999) {
            this.setState(prevState => ({
                quantity: Number(prevState.quantity) + 1
            }))
        }
    }

    decreaseQuantity(e) {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState(prevState => ({
                quantity: prevState.quantity - 1
            }))
        }
    }

    quantityHandler(e) {
        e.preventDefault();
        this.setState({
            quantity: e.target.value
        })

    }

    render() {
        if (this.state.quantity <= 1) {
            return (
                <div>
                    <div className="dk-quantityOutterDiv">
                        <label>Quantity</label>
                        <div >
                            <StyledQuantityInput>
                                <StyledMinusButton onClick={(e) => { this.decreaseQuantity(e) }}>
                                    <StyledMinusSpan>
                                        <StyledMinusSvg style={{
                                            opacity: '.4',
                                        }}><path d="M7,11H17v2H7Z"></path></StyledMinusSvg>
                                    </StyledMinusSpan>
                                </StyledMinusButton>
                                <StyledInput value={this.state.quantity} onChange={(e) => { this.quantityHandler(e) }} />
                                <StyledPlusButton onClick={(e) => { this.increaseQuantity(e) }}>
                                    <StyledPlusSpan>
                                        <StyledPlusSvg ><path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z"></path>
                                        </StyledPlusSvg>
                                    </StyledPlusSpan>
                                </StyledPlusButton>
                            </StyledQuantityInput>
                        </div>
                    </div>
                    <StyledHiddenMsg style={{
                        marginBottom: `${this.state.quantity <= 0 ? '1rem' : '0rem'}`,
                        maxHeight: `${this.state.quantity <= 0 ? '5em' : '0em'}`,
                        opacity: `${this.state.quantity <= 0 ? '1' : '0'}`,
                        paddingTop: `${this.state.quantity <= 0 ? '0.5em' : '0em'}`
                    }} >
                        <StyledHiddenSpan><svg viewBox="0 0 16 16">
                            <g >
                                <path fill="#E00751" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                <path fill="#FFF" d="M9.45 8.036L11.414 10 10 11.414 8.036 9.45 6.07 11.414 4.657 10l1.964-1.964L4.5 5.914 5.914 4.5l2.122 2.121 2.12-2.121 1.415 1.414L9.45 8.036z" />
                            </g>
                        </svg>
                        </StyledHiddenSpan>
                        Please enter a quantity between 1-999
                    </StyledHiddenMsg>
                </div >
            )
        } else if (1 < this.state.quantity && this.state.quantity < 999) {
            return (
                <div className="dk-quantityOutterDiv">
                    <label>Quantity</label>
                    <div >
                        <StyledQuantityInput>
                            <StyledMinusButton onClick={(e) => { this.decreaseQuantity(e) }}>
                                <StyledMinusSpan>
                                    <StyledMinusSvg><path d="M7,11H17v2H7Z"></path></StyledMinusSvg>
                                </StyledMinusSpan>
                            </StyledMinusButton>
                            <StyledInput value={this.state.quantity} onChange={(e) => { this.quantityHandler(e) }} />
                            <StyledPlusButton onClick={(e) => { this.increaseQuantity(e) }}>
                                <StyledPlusSpan>
                                    <StyledPlusSvg ><path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z"></path>
                                    </StyledPlusSvg>
                                </StyledPlusSpan>
                            </StyledPlusButton>
                        </StyledQuantityInput>
                    </div>
                </div>
            )
        } else if (this.state.quantity >= 999) {
            return (
                <div>
                    <div className="dk-quantityOutterDiv">
                        <label>Quantity</label>
                        <div >
                            <StyledQuantityInput>
                                <StyledMinusButton onClick={(e) => { this.decreaseQuantity(e) }}>

                                    <StyledMinusSpan>
                                        <StyledMinusSvg ><path d="M7,11H17v2H7Z"></path></StyledMinusSvg>
                                    </StyledMinusSpan>

                                </StyledMinusButton>
                                <StyledInput value={this.state.quantity} onChange={(e) => { this.quantityHandler(e) }} />
                                <StyledPlusButton onClick={(e) => { this.increaseQuantity(e) }}>
                                    <StyledPlusSpan>
                                        <StyledPlusSvg style={{ opacity: '.4' }}><path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z"></path>
                                        </StyledPlusSvg>
                                    </StyledPlusSpan>
                                </StyledPlusButton>
                            </StyledQuantityInput>
                        </div>
                    </div>
                    <StyledHiddenMsg style={{
                        marginBottom: `${this.state.quantity >= 1000 ? '1rem' : '0rem'}`,
                        maxHeight: `${this.state.quantity >= 1000 ? '5em' : '0em'}`,
                        opacity: `${this.state.quantity >= 1000 ? '1' : '0'}`,
                        paddingTop: `${this.state.quantity >= 1000 ? '0.5em' : '0em'}`
                    }}>
                        <StyledHiddenSpan><svg viewBox="0 0 16 16">
                            <g >
                                <path fill="#E00751" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                <path fill="#FFF" d="M9.45 8.036L11.414 10 10 11.414 8.036 9.45 6.07 11.414 4.657 10l1.964-1.964L4.5 5.914 5.914 4.5l2.122 2.121 2.12-2.121 1.415 1.414L9.45 8.036z" />
                            </g>
                        </svg>
                        </StyledHiddenSpan>
                        Please enter a quantity between 1-999
                    </StyledHiddenMsg>
                </div>
            )
        }

    }
}

export default QuantityForm;