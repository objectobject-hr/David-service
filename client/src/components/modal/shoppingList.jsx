import React from 'react';
import PropTypes from 'prop-types';
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
position: fixed;
-webkit-box-align: center;
align-items: center;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1001;
    transition: top 1s;
    max-height: 90vh;
    max-width: 100%;
    overflow-y: auto
    animation-name: popupframeopen;
    animation-duration: .4s;
    animation-fill-mode: forwards;
`

const StyledCloseButton = styled.div`
background-color: #fff;
position: absolute;
padding: 0;
margin: 0;
right: 0;
width: 2rem;
height: 2rem;
cursor: pointer;
line-height: 1.5;
`

const StyledMainPopup = styled.div`
min-width: 23rem;
padding: 2rem 1rem;
transition: all 1s ease;
word-break: break-word;
text-align: center;
`

const StyledListButton = styled.a`
cursor: pointer;
background: #0058a3;
color: #fff;
border-radius: 2px;
padding: .75rem 1.5rem;
position: relative;
text-align: center;
display: inline-block;
text-decoration: none;
border: 0;
font-weight: 700;
font-size: .875rem;
line-height: 1.7143;
transition-duration: .3s;
transition-timing-function: cubic-bezier(.4,0,0,1);
width: 85%;
:hover {
    background-color: #2c75b3
  }
`

export default class ShoppingList extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        return (
            <StyledBackDrop>
                <StyledModalStyle>
                    <StyledCloseButton onClick={this.props.onClose}>
                        <svg viewBox="0 0 24 24">
                            <path d="M13.45,12,16.71,8.7,15.29,7.3,12,10.59,8.74,7.32,7.33,8.75,10.62,12,7.36,15.3l1.42,1.4L12,13.41l3.32,3.26,1.41-1.42Z"></path>
                        </svg>
                    </StyledCloseButton>
                    <StyledMainPopup>
                        <div class="">
                            <p>Item added to your shopping list Shopping list</p>
                            <StyledListButton>View your shopping list</StyledListButton>
                        </div>
                    </StyledMainPopup>
                </StyledModalStyle>
            </StyledBackDrop>
        );
    }
}

ShoppingList.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};