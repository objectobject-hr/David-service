import React from 'react';
import PropTypes from 'prop-types';


export default class ShoppingList extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="dk-shoppingListBackDrop">
                <div className="dk-shoppingListModalStyle">
                    <div className="dk-shoppingListCloseButton" onClick={this.props.onClose}>
                        <svg viewBox="0 0 24 24">
                            <path d="M13.45,12,16.71,8.7,15.29,7.3,12,10.59,8.74,7.32,7.33,8.75,10.62,12,7.36,15.3l1.42,1.4L12,13.41l3.32,3.26,1.41-1.42Z"></path>
                        </svg>
                    </div>
                    <div className="dk-mainPopup">
                        <div >
                            <p>Item added to your shopping list Shopping list</p>
                            <a className="dk-listButton">View your shopping list</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ShoppingList.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};