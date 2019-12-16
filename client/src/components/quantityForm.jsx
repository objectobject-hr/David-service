import React from "react";
import HiddenMessage from "./modal/hiddenMessage.jsx";

class QuantityForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      quantity: 1
    };

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.quantityHandler = this.quantityHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.quantity < 1) {
      this.setState({
        isOpen: true
      });
    } else if (this.state.quantity >= 1 || this.state.quantity <= 1000) {
      this.setState({
        isOpen: false
      });
    }
  }

  increaseQuantity(e) {
    e.preventDefault();
    if (this.state.quantity < 999) {
      this.setState(prevState => ({
        quantity: Number(prevState.quantity) + 1
      }));
    }
  }

  decreaseQuantity(e) {
    e.preventDefault();
    if (this.state.quantity > 1) {
      this.setState(prevState => ({
        quantity: prevState.quantity - 1
      }));
    }
  }

  quantityHandler(e) {
    e.preventDefault();
    if (Number(e.target.value) !== Number(e.target.value)) {
      this.setState({
        isOpen: true
      });
      console.log("opne!!", this.state.quantity);
    }
    this.setState({
      quantity: e.target.value
    });
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <div>
        <div className="dk-quantityOutterDiv">
          <label>Quantity</label>
          <div>
            <div className="dk-quantityInnerDiv">
              <button
                className="dk-minusButton"
                onClick={e => {
                  this.decreaseQuantity(e);
                }}
              >
                <span className="dk-minusSpan">
                  <svg
                    className="dk-minusSvg"
                    style={{
                      opacity: `${this.state.quantity <= 1 ? 0.4 : 1}`
                    }}
                  >
                    <path d="M7,11H17v2H7Z"></path>
                  </svg>
                </span>
              </button>
              <input
                className="dk-inputField"
                value={this.state.quantity}
                type="number"
                onChange={e => {
                  this.quantityHandler(e);
                }}
              />
              <button
                className="dk-plusButton"
                onClick={e => {
                  this.increaseQuantity(e);
                }}
              >
                <span className="dk-plusSpan">
                  <svg
                    className="dk-plusSvg"
                    style={{
                      opacity: `${this.state.quantity >= 999 ? 0.4 : 1}`
                    }}
                  >
                    <path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <HiddenMessage
          quantity={this.state.quantity}
          show={this.state.isOpen}
        />
      </div>
    );
  }
}

export default QuantityForm;
