import React from 'react';
import Carousel from './Carousel.jsx';
import ProductDetail from './productDetail.jsx';
import OptionButtons from './optionsButtons.jsx';
import axios from 'axios'
import styled from 'styled-components';
import ZoomImages from './zoomImages.jsx'

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
            if (!this.state.isOpen) {

                return (
                    <div>
                        <StyledBody>
                            <div>
                                <Carousel indexGetter={this.indexGetter} zoom={this.zoomHandler} />
                            </div>
                            <StyledProductDetail>
                                <div>
                                    <ProductDetail data={this.state.list[0]} />
                                </div><br />
                                <div><OptionButtons /></div>
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
                        {/* <StyledSlider style={{ 'transform': `translateY(-${0 * (100 / this.state.list[0].imageSrc.length)}%)` }}> */}
                        <StyledZoomImage style={{ 'transform': `translateY(-${this.state.currentIndex * (100 / this.state.list[0].imageSrc.length)}%)` }}>

                            {this.state.list[0].imageSrc.map((img, i) => (
                                < ZoomImages list={img} key={i} />
                            ))}
                        </StyledZoomImage>
                        {/* </StyledSlider> */}
                    </div>
                )
            }
        }
    }
}

export default App;