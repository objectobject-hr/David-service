import React from 'react';
import PropTypes from 'prop-types';
import Pairs from './pairs.jsx';
import styled from 'styled-components';

const StyledBackDrop = styled.div`
position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    padding: 50px;
`

const StyledModalStyle = styled.div`
width: 80rem;
box-sizing: border-box;
transform: translate(-50%, -3rem);
border-radius: 5px;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
flex-direction: column;
background-color: #fff;
transition: all 400ms ease;
padding: 0;
    margin: 0 auto;
    left: 50%;
    bottom: 0;
    position: absolute;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
`

const StyledMainDiv = styled.div`
box-sizing: border-box;
max-height: calc(100vh - 11rem);
-webkit-box-flex: 1;
flex-grow: 1;
position: relative;
display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`

const StyledUpperDiv = styled.div`
box-sizing: border-box;
border-radius: 5px;
    position: relative;
    height: 4rem;
    display: flex;
    flex-shrink: 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    background-color: #f5f5f5;
    line-height: 1.5;
`

const StyledConfirmation = styled.div`
margin-left: 2rem;
box-sizing: border-box;
display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
`

const StyledConfirmIcon = styled.div`
flex-shrink: 0;
width: 1.5rem;
height: 1.5rem;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
    animation: magic-bloop 0.4s ease-out forwards;
`

const StyledConfirmSvg = styled.svg`
width: 1.5rem;
    height: 1.5rem;
    box-sizing: border-box;
    viewBox: 0 0 24 24;

`

const StyledAddToCart = styled.span`
margin-left: 0.5rem;
font-size: 0.875rem;
font-weight: bold;
display: flex;
    -webkit-box-align: center;
    align-items: center;
    animation: slide-right 0.4s ease-out 0.2s forwards;
    animation-fill-mode: forwards;
`

const StyledCloseButton = styled.button`
z-index: 1;
margin: 1.25rem 2rem;
padding: 0;
height: 1.5rem;
position: absolute;
right: 0;
top: 0;
background-color: transparent;
border: none;
cursor: pointer;
line-height: 1.5;
`

const StyledCloseIcon = styled.svg`
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
line-height: 1.5;
viewBox= 0 0 24 24;
`

const StyledMiddleDiv = styled.div`
height: 100%;
    max-height: calc(100vh - 80px);
    padding: 0.5rem 0 0;
    -webkit-box-pack: start;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: auto;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 100%;
`
const StyledH4 = styled.h4`
text-align: left;
padding: 0 2rem;
font-size: 1.5rem;
line-height: 1.3334;
letter-spacing: -.42px;
margin-bottom: 1.5rem;
font-weight: 700;
`

const StyledLists = styled.div`
-webkit-box-pack: center;
justify-content: center;
margin: 0;
    padding: 0 1rem;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`

const StyledList = styled.div`
padding: 2rem 1rem;
position: relative;
    width: 100%;
    min-height: 1px;

`

export default class ShoppingBagModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: this.props.data,
            index: []
        }
    }

    componentDidMount() {
        this.randomListIndexGenerator()
    }

    randomListIndexGenerator() {
        const randomIndexLists = [];

        for (var i = 0; i < 4; i++) {
            randomIndexLists.push(Math.floor((Math.random() * this.props.data.length)))
        }

        this.setState({
            index: randomIndexLists
        })
    }

    render() {
        if (!this.props.show) {
            return null;
        } else {

            return (
                <StyledBackDrop>
                    <StyledModalStyle>
                        <StyledMainDiv>
                            <StyledUpperDiv>
                                <StyledConfirmation>
                                    <StyledConfirmIcon>
                                        <StyledConfirmSvg>
                                            <g fill="none" ><path fill="#0A8A00" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z">
                                            </path>
                                                <path fill="#FFF" d="M10.873 13.478l-3.41-3.657L6 11.185l4.832 5.066 7.28-6.788L16.746 8z" class="white">
                                                </path>
                                            </g>
                                        </StyledConfirmSvg>
                                    </StyledConfirmIcon>
                                    <StyledAddToCart>Added to cart</StyledAddToCart>
                                </StyledConfirmation>
                                <StyledCloseButton>
                                    <StyledCloseIcon>
                                        <path d="M17.597 5l-5.592 5.592L6.414 5 5 6.415l5.591 5.591L5 17.597l1.414 1.414 5.591-5.592 5.592 5.592 1.414-1.414-5.592-5.591 5.592-5.591z">
                                        </path>
                                    </StyledCloseIcon>
                                </StyledCloseButton>
                            </StyledUpperDiv>
                            <StyledMiddleDiv>
                                <StyledH4>
                                    Your YPPERLIG pairs well with
                            </StyledH4>
                                <StyledLists>
                                    <StyledList>
                                        <Pairs data={this.state.lists[this.state.index[0]]} />
                                    </StyledList>
                                    <StyledList>
                                        <Pairs data={this.state.lists[this.state.index[1]]} />
                                    </StyledList>
                                    <StyledList>
                                        <Pairs data={this.state.lists[this.state.index[2]]} />
                                    </StyledList>
                                    <StyledList>
                                        <Pairs data={this.state.lists[this.state.index[3]]} />
                                    </StyledList>
                                </StyledLists>
                            </StyledMiddleDiv>
                        </StyledMainDiv>
                    </StyledModalStyle>
                </StyledBackDrop>
            )
        }
    }
}


ShoppingBagModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};