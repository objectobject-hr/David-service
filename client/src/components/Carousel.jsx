import React from 'react';
import GalleryLists from './GalleryLists.jsx';
import MainSlide from './MainSlide.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="carousel">
          <GalleryLists />
        </div>
        <div>
          <MainSlide />
        </div>
        <LeftArrow />
        <RightArrow />
      </div>

    )
  }
}

export default Carousel;