import React from 'react';
import GalleryLists from './GalleryLists.jsx';
import MainSlide from './MainSlide.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import axios from 'axios';

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: null,
      currentIndex: 0
    }
    this.leftArrowHandler = this.leftArrowHandler.bind(this);
    this.rightArrowHandler = this.rightArrowHandler.bind(this);
  }


  componentDidMount() {
    this.getProductData()
  }

  getProductData() {
    axios.get('/ikea').then((response) => {
      // console.log('hello from client', response.data)
      this.setState({
        lists: response.data
      })
    })
  }

  rightArrowHandler() {
    if (this.state.currentIndex < this.state.lists[0].imageSrc.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
    } else {
      this.setState({
        currentIndex: 0
      })
    }
  }

  leftArrowHandler() {
    if (this.state.currentIndex <= 0) {
      this.setState({
        currentIndex: this.state.lists[0].imageSrc.length - 1
      })
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
    }
  }

  render() {

    if (this.state.lists === null) {

      return (
        < div ></div >
      )
    } else {
      return (
        < div >
          <div style={{ float: 'left' }} className="carousel">
            <GalleryLists lists={this.state.lists[0].imageSrc} />
          </div>
          <div style={{ float: 'left' }}>
            <div>
              <LeftArrow leftArrow={this.leftArrowHandler} />
            </div>
            <MainSlide list={this.state.lists[0].imageSrc} index={this.state.currentIndex} />
            <div>
              <RightArrow rightArrow={this.rightArrowHandler} />
            </div>
          </div>
        </div >
      )
    }
  }
}

export default Carousel;