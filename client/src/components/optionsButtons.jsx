import React from 'react';
import styled from 'styled-components';
import ShoppingList from './modal/shoppingList.jsx';
import ShoppingBagModal from './modal/shoppingBagModal.jsx';
import QuantityForm from './quantityForm.jsx';

const StyledShoppingBagButton = styled.button`
background: #0058a3;
color: #fff;
border-radius: 2px;
padding: 1rem 7.05rem;

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
    :hover {
        background-color: #2c75b3
      }
`

const StyledShoppingListButton = styled.button`
margin-bottom: 1rem;
cursor: pointer;
background: #f5f5f5;
    color: #111;
    padding: 1rem 7.2rem;
    position: relative;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.7143;
    aria-haspopup:true;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.4,0,0,1);
    :hover {
        background-color: #e8e8e8;
      }
    
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

const StyledMarginDiv = styled.div`
margin-bottom: 1rem;
`

class OptionButtons extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.data,
            listShow: false,
            bagShow: false
        }
        this.showModal = this.showModal.bind(this)
        this.showBagModal = this.showBagModal.bind(this)
    }

    showModal(e) {
        e.preventDefault()
        this.setState({
            listShow: !this.state.listShow
        });
    };

    showBagModal(e) {
        e.preventDefault()
        this.setState({
            bagShow: !this.state.bagShow
        });
    }

    render() {

        return (
            <div>
                <form >
                    <QuantityForm />
                </form >
                <StyledMarginDiv>
                    < StyledShoppingBagButton onClick={e => { this.showBagModal(e); }}>
                        <span >
                            < StyledShoppingBagIcon>
                                <path d="M20 15h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm-6 2H6.441l-1.666-6h16.558L22 9h-5.323l-1.245-3.114L12.646 4h-1.292L8.569 5.886 7.322 9H2l2.544 8.633A2 2 0 0 0 6.441 19H14zM10.677 6h2.646l1.2 3H9.477z">
                                </path>
                            </StyledShoppingBagIcon>
                            <span>Add to shopping bag</span>
                        </span>
                    </StyledShoppingBagButton>
                </StyledMarginDiv>
                <StyledMarginDiv>
                    <StyledShoppingListButton onClick={e => { this.showModal(e); }}>
                        <span >
                            <StyledShoppingList>
                                <path d="M18,18h2v2H18v2H16V20H14V18h2V16h2ZM12,6H6V8h6ZM6,12H8V10H6ZM4,4H14l2-2H2V22H12V20H4ZM5.77,18.29l4.66-2.05L22,4.66,19.34,2,7.72,13.73Z"></path>
                            </StyledShoppingList>
                            <span>Add to shopping list</span>
                        </span>
                    </StyledShoppingListButton>
                </StyledMarginDiv>
                <div>
                    <ShoppingBagModal data={this.state.data} onClose={this.showBagModal} show={this.state.bagShow}></ShoppingBagModal>
                </div>
                <div>
                    <ShoppingList onClose={this.showModal} show={this.state.listShow} ></ShoppingList>
                </div>
            </div>
        )
    }
}

export default OptionButtons;