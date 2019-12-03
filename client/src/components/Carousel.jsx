import React from 'react';
import GalleryLists from './GalleryLists.jsx';
import MainSlide from './MainSlide.jsx'

class Carousel extends React.Component {
  constructor() {
    super()

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
      </div>

    )
  }
}

export default Carousel;