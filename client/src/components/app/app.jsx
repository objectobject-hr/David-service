import React from "react";
import Carousel from "../Carousel.jsx";
import ProductDetail from "../productDetail.jsx";
import OptionButtons from "../optionsButtons.jsx";
import axios from "axios";
import AvailableOptions from "../AvailableOptions.jsx";
import ZoomPageModal from "../modal/zoomPage.jsx";
import { connect } from "react-redux";
import { setProductLists } from "../../redux/actions/productActions";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: null,
      isOpen: false,
      currentIndex: 0,
      randomIndex: 0
    };

    this.zoomHandler = this.zoomHandler.bind(this);
    this.indexGetter = this.indexGetter.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.getProductData();
  }

  randomIndexGenerator(index) {
    const random = Math.floor(Math.random() * index);

    this.setState({
      randomIndex: random
    });
  }

  getProductData() {
    axios.get("/ikea").then(response => {
      this.setState({
        list: response.data
      });
      this.props.setProductLists(response.data);
      this.randomIndexGenerator(response.data.length);
    });
  }

  zoomHandler() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    document.body.classList.add("modal-open");
  }

  indexGetter(index) {
    this.setState({
      currentIndex: index
    });
  }

  showModal(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
    document.body.classList.remove("modal-open");
  }

  render() {
    if (this.state.list === null) {
      return null;
    } else {
      return (
        <div
          className="dk-theMainDiv"
          style={{
            fontFamily: `Noto Sans, sans-serif`
          }}
        >
          <div className="dk-outerCategory">
            <ol className="dk-headerOl">
              <li className="dk-headerLi">Home</li>
              <span className="dk-headerSlash">/</span>
              <li className="dk-headerLi">Products</li>
              <span className="dk-headerSlash">/</span>
              <li className="dk-headerLi">Furniture</li>
              <span className="dk-headerSlash">/</span>
              <li className="dk-headerLi">Tables & desks</li>
              <span className="dk-headerSlash">/</span>
              <li className="dk-headerLi">
                {this.state.list[this.state.randomIndex].name}{" "}
                {
                  this.state.list[this.state.randomIndex].shortDesc.split(
                    ","
                  )[0]
                }
              </li>
            </ol>
          </div>
          <div className="dk-carouselAndProductInfo">
            <Carousel
              randomIndex={this.state.randomIndex}
              indexGetter={this.indexGetter}
              zoom={this.zoomHandler}
            />
            <div className="dk-productDetail">
              <div>
                <ProductDetail data={this.state.list[this.state.randomIndex]} />
              </div>
              <br />
              <div>
                <OptionButtons data={this.state.list} />
              </div>
              <div>
                <AvailableOptions />
              </div>
            </div>
          </div>
          {this.state.isOpen ? (
            <ZoomPageModal
              index={this.state.currentIndex}
              onClose={this.showModal}
              zoom={this.zoomHandler}
              imageSrc={this.state.list[this.state.randomIndex].imageSrc}
              show={this.state.isOpen}
            />
          ) : null}
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setProductLists: products => dispatch(setProductLists(products))
  };
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
