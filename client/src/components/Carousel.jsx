import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div className="carousel">
        <GalleryLists />
      </div>

    )
  }
}

export default Carousel;