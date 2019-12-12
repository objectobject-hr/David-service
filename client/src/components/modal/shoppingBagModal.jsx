import React from 'react';
import PropTypes from 'prop-types';
import Pairs from './pairs.jsx';

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
                <div className="dk-backDrop">
                    <div className="dk-modalStyle">
                        <div className="dk-mainDiv">
                            <div className="dk-upperDiv">
                                <div className="dk-confirmation">
                                    <div className="dk-confirmationIcon">
                                        <svg className="dk-confirmSvg">
                                            <g fill="none" ><path fill="#0A8A00" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z">
                                            </path>
                                                <path fill="#FFF" d="M10.873 13.478l-3.41-3.657L6 11.185l4.832 5.066 7.28-6.788L16.746 8z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="dk-addToCart">Added to cart</span>
                                </div>
                                <button className="dk-closeButton">
                                    <svg className="dk-closeIcon" onClick={this.props.onClose}>
                                        <path d="M17.597 5l-5.592 5.592L6.414 5 5 6.415l5.591 5.591L5 17.597l1.414 1.414 5.591-5.592 5.592 5.592 1.414-1.414-5.592-5.591 5.592-5.591z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="dk-middleDiv">
                                <h4 className="dk-h4">
                                    Your YPPERLIG pairs well with
                            </h4>
                                <div className="dk-pairsLists">
                                    <div className="dk-pairsList">
                                        <Pairs data={this.state.lists[this.state.index[0]]} />
                                    </div>
                                    <div className="dk-pairsList">
                                        <Pairs data={this.state.lists[this.state.index[1]]} />
                                    </div>
                                    <div className="dk-pairsList">
                                        <Pairs data={this.state.lists[this.state.index[2]]} />
                                    </div>
                                    <div className="dk-pairsList">
                                        <Pairs data={this.state.lists[this.state.index[3]]} />
                                    </div>
                                </div>
                            </div>
                            <div className="dk-bottomDiv">
                                <div className="dk-innerDiv">
                                    <span className="dk-cartSpan">
                                        <svg className="dk-cartIcon">
                                            <path d="M12 4C9.2 4 7 6.2 7 9H2l3 11h14l3-11h-5c0-2.8-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3zm5.5 12h-11l-1.9-7h14.8l-1.9 7z">
                                            </path>
                                        </svg>
                                        <span >Shopping cart</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


ShoppingBagModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};