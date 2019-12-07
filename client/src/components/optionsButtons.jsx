import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: white;
    height: 30px;
    width: 30px;
`
const StyledQuantity = styled.div`
border: 1px solid #959595;
border-radius: 2px;
height: 48px;
width: 144px;
`
const StyledShoppingBagButton = styled.button`
background: #0058a3;
color: #fff;
border-radius: 2px;
padding: 1rem 1.5rem;

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
`

const StyledShoppingListButton = styled.button`
margin-bottom: 1rem;
cursor: pointer;
background: #f5f5f5;
    color: #111;
    padding: .75rem 1.5rem;
    position: relative;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    aria-haspopup:true;
`

const StyledShoppingBagIcon = styled.svg`
fill: #fff;
display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
    viewBox: 0 0 24 24;
    focusable: false;
    aria-hidden: true;
    `
const StyledShoppingList = styled.svg`
fill: #111;
display: inline-block;
viewBox: 0 0 24 24;
    focusable: false;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: .5rem;
`

class OptionButtons extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <form>
                <div><label>Quantity </label>
                    <StyledQuantity>
                        <StyledButton>
                            <svg>
                                <path d="M7,11H17v2H7Z" />
                            </svg>
                        </StyledButton>
                        <input type="number" pattern="[0-9]*" id="amount" aria-label="quantity" value="1" min="1" max="999" />
                        <StyledButton>
                            <svg>
                                <path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z" />
                            </svg>
                        </StyledButton>
                    </StyledQuantity>
                </div >
                < StyledShoppingBagButton>
                    <span >
                        < StyledShoppingBagIcon>
                            <path d="M20 15h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm-6 2H6.441l-1.666-6h16.558L22 9h-5.323l-1.245-3.114L12.646 4h-1.292L8.569 5.886 7.322 9H2l2.544 8.633A2 2 0 0 0 6.441 19H14zM10.677 6h2.646l1.2 3H9.477z">
                            </path>
                        </StyledShoppingBagIcon>
                        <span>Add to shopping bag</span>
                    </span>
                </StyledShoppingBagButton>
                <StyledShoppingListButton>
                    <span >
                        <StyledShoppingList>
                            <path d="M18,18h2v2H18v2H16V20H14V18h2V16h2ZM12,6H6V8h6ZM6,12H8V10H6ZM4,4H14l2-2H2V22H12V20H4ZM5.77,18.29l4.66-2.05L22,4.66,19.34,2,7.72,13.73Z"></path>
                        </StyledShoppingList>
                        <span>Add to shopping list</span>
                    </span>
                </StyledShoppingListButton>
            </form>
        )
    }
}

export default OptionButtons;