import React from 'react';
import GalleryLists from './GalleryLists.jsx';
import MainSlide from './MainSlide.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import axios from 'axios';
import styled from 'styled-components';

const StyledSlider = styled.div`
  top:5rem;
  position: relative;
  max-width: 226px;
  margin: 0 auto;
  
`

const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  left: -200%;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  overflow: hidden;
  cursor: zoom-in;

  .card {
    flex: 1;
    min-width: 200px;
  }
`

const StyledOverflow = styled.div`
width: 800px;
height: 800px;
overflow: hidden;
left: 35rem;
position: fixed;
`

const StyledImageLists = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
`

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
    this.getUrl = this.getUrl.bind(this)
  }


  componentDidMount() {
    this.getProductData()
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

  getIndex(url) {
    var imgs = this.state.lists[0].imageSrc
    var index = imgs.indexOf(url)

    this.setState({
      currentIndex: index
    })
  }

  getUrl(url) {

    this.setState({
      url: url
    })
  }

  render() {

    if (this.state.lists === null) {

      return (
        < div ></div >
      )
    } else {
      return (
        < div >
          <div >
            <div>
              <LeftArrow leftArrow={this.leftArrowHandler} />
            </div>
            <div>
              <StyledOverflow>
                <StyledSlider>
                  <StyledWrapper onClick={() => { this.props.zoom() }} style={{ 'transform': `translateX(-${this.state.currentIndex * (100 / this.state.lists[0].imageSrc.length)}%)` }}>
                    {
                      this.state.lists[0].imageSrc.map((list, i) =>
                        <MainSlide list={list} index={this.state.currentIndex} key={i} />
                      )
                    }
                  </StyledWrapper>
                </StyledSlider>
              </StyledOverflow>
            </div>
            <StyledImageLists>
              <GalleryLists lists={this.state.lists[0].imageSrc} index={this.getIndex} getUrl={this.getUrl} url={this.state.url} />
            </StyledImageLists>
            <div>
              <RightArrow rightArrow={this.rightArrowHandler} />
            </div>
          </div >
        </div >
      )
    }
  }
}

export default Carousel;