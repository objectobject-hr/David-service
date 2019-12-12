import React from 'react';
import styled from 'styled-components';
import ShoppingList from './modal/shoppingList.jsx';
import ShoppingBagModal from './modal/shoppingBagModal.jsx';
import QuantityForm from './quantityForm.jsx';


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
                <div className="dk-optionButtonOutterDiv">
                    <button className="dk-shoppingBagButton" onClick={e => { this.showBagModal(e); }}>
                        <span >
                            <svg className="dk-shoppingBagIcon">
                                <path d="M20 15h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm-6 2H6.441l-1.666-6h16.558L22 9h-5.323l-1.245-3.114L12.646 4h-1.292L8.569 5.886 7.322 9H2l2.544 8.633A2 2 0 0 0 6.441 19H14zM10.677 6h2.646l1.2 3H9.477z">
                                </path>
                            </svg>
                            <span>Add to shopping bag</span>
                        </span>
                    </button>
                </div>
                <div className="dk-optionButtonOutterDiv">
                    <button className="dk-shoppingListButton" onClick={e => { this.showModal(e); }}>
                        <span >
                            <svg className="dk-shoppingListSvg">
                                <path d="M18,18h2v2H18v2H16V20H14V18h2V16h2ZM12,6H6V8h6ZM6,12H8V10H6ZM4,4H14l2-2H2V22H12V20H4ZM5.77,18.29l4.66-2.05L22,4.66,19.34,2,7.72,13.73Z"></path>
                            </svg>
                            <span>Add to shopping list</span>
                        </span>
                    </button>
                </div>
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