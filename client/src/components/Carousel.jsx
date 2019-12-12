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
      currentIndex: 0,
      url: null
    }
    this.leftArrowHandler = this.leftArrowHandler.bind(this);
    this.rightArrowHandler = this.rightArrowHandler.bind(this);
    this.getIndex = this.getIndex.bind(this)

  }

  componentDidMount() {
    this.getProductData()
  }

  componentDidUpdate() {
    setTimeout(() => { this.props.indexGetter(this.state.currentIndex) }, 10)
  }

  getProductData() {
    axios.get('/ikea').then((response) => {
      // console.log('hello from client', response.data)
      this.setState({
        lists: response.data,
        url: response.data[0].imageSrc[0]
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

    if (this.state.currentIndex < this.state.lists[0].imageSrc.length - 1) {
      this.setState({
        url: this.state.lists[0].imageSrc[this.state.currentIndex + 1]
      })
    } else {
      this.setState({
        url: this.state.lists[0].imageSrc[0]
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

    if (this.state.currentIndex === 0) {
      this.setState({
        url: this.state.lists[0].imageSrc[this.state.lists[0].imageSrc.length - 1]
      })
    } else {
      this.setState({
        url: this.state.lists[0].imageSrc[this.state.currentIndex - 1]
      })
    }
  }

  getIndex(url) {
    // console.log(url)
    var imgs = this.state.lists[0].imageSrc
    var index = imgs.indexOf(url)

    this.setState({
      currentIndex: index,
      url: this.state.lists[0].imageSrc[index]
    })
  }


  render() {
    if (this.state.lists === null) {

      return (
        < div ></div >
      )
    } else {
      return (
        <div >
          <div className="dk-slidesAndArrowsDiv">
            <div className="dk-galleryLists">
              <GalleryLists lists={this.state.lists[0].imageSrc} index={this.getIndex} url={this.state.url} />
            </div>

            <LeftArrow leftArrow={this.leftArrowHandler} />

            <div>
              <div className="dk-overFlow">
                <div className="dk-slideDiv">
                  <div className="dk-WrapperDiv" onClick={() => { this.props.zoom() }} style={{ 'transform': `translateX(-${this.state.currentIndex * (100 / this.state.lists[0].imageSrc.length)}%)` }}>
                    {
                      this.state.lists[0].imageSrc.map((list, i) =>
                        <MainSlide list={list} index={this.state.currentIndex} key={i} />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

            <RightArrow rightArrow={this.rightArrowHandler} />

          </div>
        </div >
      )
    }
  }
}

export default Carousel;