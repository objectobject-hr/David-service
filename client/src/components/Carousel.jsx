import React from 'react';
import GalleryLists from './GalleryLists.jsx';
import MainSlide from './MainSlide.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import dummyData from '../dummyData.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: dummyData,
      currentIndex: 0
    }
    this.leftArrowHandler = this.leftArrowHandler.bind(this);
    this.rightArrowHandler = this.rightArrowHandler.bind(this);
  }

  leftArrowHandler () {

  }

  rightArrowHandler () {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div>
        <div style={{float:'left'}} className="carousel">
          <GalleryLists lists={this.state.lists}/>
        </div>
        <div>
          <LeftArrow  leftArrow={this.leftArrowHandler}/>
        </div>
        <div style={{float:'left'}}>
          <MainSlide list={this.state.lists[0]}/>
        </div>
        <div>
          <RightArrow  rightArrow={this.rightArrowHandler}/>
        </div>
      </div>

    )
  }
}

export default Carousel;