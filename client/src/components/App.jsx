import React from 'react';
import Carousel from './Carousel.jsx';
import ProductDetail from './productDetail.jsx';
import OptionButtons from './optionsButtons.jsx';
import axios from 'axios'
import styled from 'styled-components';
import ZoomImages from './zoomImages.jsx';
import AvailableOptions from './AvailableOptions.jsx';

const StyledProductDetail = styled.div`
width: 25rem;
background-color: white;
top: 3rem;
position: absolute;
height: 700px;
right: 240px;
padding-right: 50px;
padding-left: 50px;
`;

const StyledBody = styled.div`
margin-left: 20rem;
margin-right: 20rem;
`;

const StyledCloseButton = styled.button`
cursor: pointer;
position: fixed;
top: 15px;
right: 15px;
width: 3rem;
height: 3rem;
border-radius: 50%;
background-position: 50%;
border: none;
`

const StyledZoomImage = styled.div`
display: grid;
position: absolute;
text-align: center;
top: -20%
right: 265px;
transition: transform;
`

const StyledCategories = styled.div`
margin: 0 auto;
    max-width: 1400px;
    padding: 0 1rem .8rem;
    font-size: .75rem;
    line-height: 1.3334;
`

const StyledOl = styled.ol`
padding-left: 0;
list-style-type: none;
display: inline-block;
margin: 0;
width: 100%;
line-height: 2;
margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    font-size: .75rem;
`

const StyledLi = styled.li`
display: inline;
max-width: 100%;
    margin-top: .25rem;
    margin-bottom: .25rem;
    padding-left: 0;
    margin-bottom: 0
    line-height: 2;
    cursor: pointer;
:hover {
    text-decoration: underline;
  }
`

const StyledSlash = styled.span`
padding-left: 8px;
padding-right: 8px;
`

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: null,
            isOpen: false,
            currentIndex: 0
        }

        this.zoomHandler = this.zoomHandler.bind(this)
        this.indexGetter = this.indexGetter.bind(this)

    }

    componentDidMount() {
        this.getProductData()
    }

    getProductData() {
        axios.get('/ikea').then((response) => {
            // console.log('hello from client', response.data)
            this.setState({
                list: response.data
            })
        })
    }

    zoomHandler() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    indexGetter(index) {
        this.setState({
            currentIndex: index
        })
    }

    render() {
        if (this.state.list === null) {
            return null
        } else {
            console.log(this.state.list[0].name)
            if (!this.state.isOpen) {

                return (
                    <div style={{ fontFamily: `'Noto Sans', sans-serif` }}>
                        <StyledCategories>
                            <StyledOl>
                                <StyledLi>
                                    Home
                                </StyledLi>
                                <StyledSlash>/</StyledSlash>
                                <StyledLi>
                                    Products
                                </StyledLi>
                                <StyledSlash>/</StyledSlash>
                                <StyledLi>
                                    Furniture
                                </StyledLi>
                                <StyledSlash>/</StyledSlash>
                                <StyledLi>
                                    Tables & desks
                                </StyledLi>
                                <StyledSlash>/</StyledSlash>
                                <StyledLi>
                                    {this.state.list[0].name} {this.state.list[0].shortDesc.split(',')[0]}
                                </StyledLi>
                            </StyledOl>
                        </StyledCategories>
                        <StyledBody>
                            <div>
                                <Carousel indexGetter={this.indexGetter} zoom={this.zoomHandler} />
                            </div>
                            <StyledProductDetail>
                                <div>
                                    <ProductDetail data={this.state.list[0]} />
                                </div><br />
                                <div><OptionButtons /></div>
                                <div><AvailableOptions /></div>
                            </StyledProductDetail>
                        </StyledBody>
                    </div>
                )
            } else {
                // console.log('index!?!? -----', this.state.currentIndex)
                // console.log('list exist?!?!?', this.state.list[0].imageSrc.length)
                return (
                    <div>
                        <StyledCloseButton onClick={() => { this.zoomHandler() }}>
                            <svg width="20" height="20">
                                <path fill-rule="evenodd" d="M17.597 5l-5.592 5.592L6.414 5 5 6.415l5.591 5.591L5 17.597l1.414 1.414 5.591-5.592 5.592 5.592 1.414-1.414-5.592-5.591 5.592-5.591z" />
                            </svg>
                        </StyledCloseButton>
                        <StyledZoomImage style={{ 'transform': `translateY(-${this.state.currentIndex * (100 / this.state.list[0].imageSrc.length)}%)` }}>

                            {this.state.list[0].imageSrc.map((img, i) => (
                                < ZoomImages list={img} key={i} />
                            ))}
                        </StyledZoomImage>
                    </div>
                )
            }
        }
    }
}

export default App;