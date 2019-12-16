import React from "react";
import HiddenMessage from "./modal/hiddenMessage.jsx";

class QuantityForm extends React.Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
      isOpen: false
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
    if (this.state.quantity <= 1) {
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
                        opacity: ".4"
                      }}
                    >
                      <path d="M7,11H17v2H7Z"></path>
                    </svg>
                  </span>
                </button>
                <input
                  className="dk-inputField"
                  value={this.state.quantity}
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
                    <svg className="dk-plusSvg">
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
    } else if (1 < this.state.quantity && this.state.quantity < 999) {
      return (
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
                  <svg className="dk-minusSvg">
                    <path d="M7,11H17v2H7Z"></path>
                  </svg>
                </span>
              </button>
              <input
                className="dk-inputField"
                value={this.state.quantity}
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
                  <svg className="dk-plusSvg">
                    <path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.quantity >= 999) {
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
                    <svg className="dk-minusSvg">
                      <path d="M7,11H17v2H7Z"></path>
                    </svg>
                  </span>
                </button>
                <input
                  className="dk-inputField"
                  value={this.state.quantity}
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
                    <svg className="dk-plusSvg" style={{ opacity: ".4" }}>
                      <path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="dk-hiddenMsg"
            style={{
              marginBottom: `${this.state.quantity >= 1000 ? "1rem" : "0rem"}`,
              maxHeight: `${this.state.quantity >= 1000 ? "5em" : "0em"}`,
              opacity: `${this.state.quantity >= 1000 ? "1" : "0"}`,
              paddingTop: `${this.state.quantity >= 1000 ? "0.5em" : "0em"}`
            }}
          >
            <span className="dk-hiddenSpan">
              <svg viewBox="0 0 16 16">
                <g>
                  <path
                    fill="#E00751"
                    d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  />
                  <path
                    fill="#FFF"
                    d="M9.45 8.036L11.414 10 10 11.414 8.036 9.45 6.07 11.414 4.657 10l1.964-1.964L4.5 5.914 5.914 4.5l2.122 2.121 2.12-2.121 1.415 1.414L9.45 8.036z"
                  />
                </g>
              </svg>
            </span>
            Please enter a quantity between 1-999
          </div>
        </div>
      );
    } else {
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
                    <svg className="dk-minusSvg">
                      <path d="M7,11H17v2H7Z"></path>
                    </svg>
                  </span>
                </button>
                <input
                  className="dk-inputField"
                  value={this.state.quantity}
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
                    <svg className="dk-plusSvg" style={{ opacity: ".4" }}>
                      <path d="M13,11V7H11v4H7v2h4v4h2V13h4V11Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="dk-hiddenMsg"
            style={{
              marginBottom: `${this.state.quantity >= 1000 ? "1rem" : "0rem"}`,
              maxHeight: `${this.state.quantity >= 1000 ? "5em" : "0em"}`,
              opacity: `${this.state.quantity >= 1000 ? "1" : "0"}`,
              paddingTop: `${this.state.quantity >= 1000 ? "0.5em" : "0em"}`
            }}
          >
            <span className="dk-hiddenSpan">
              <svg viewBox="0 0 16 16">
                <g>
                  <path
                    fill="#E00751"
                    d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  />
                  <path
                    fill="#FFF"
                    d="M9.45 8.036L11.414 10 10 11.414 8.036 9.45 6.07 11.414 4.657 10l1.964-1.964L4.5 5.914 5.914 4.5l2.122 2.121 2.12-2.121 1.415 1.414L9.45 8.036z"
                  />
                </g>
              </svg>
            </span>
            Please enter a quantity between 1-999
          </div>
        </div>
      );
    }
  }
}

export default QuantityForm;
