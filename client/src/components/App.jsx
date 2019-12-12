import React from 'react';
import Carousel from './Carousel.jsx';
import ProductDetail from './productDetail.jsx';
import OptionButtons from './optionsButtons.jsx';
import axios from 'axios'
import ZoomImages from './zoomImages.jsx';
import AvailableOptions from './AvailableOptions.jsx';

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
                    <div className="dk-theMainDiv" style={{
                        fontFamily: `Noto Sans, sans-serif`
                    }}>
                        <div className="dk-outerCategory">
                            <ol className="dk-headerOl">
                                <li className="dk-headerLi">
                                    Home
                                </li>
                                <span className="dk-headerSlash">/</span>
                                <li className="dk-headerLi">
                                    Products
                                    </li>
                                <span className="dk-headerSlash">/</span>
                                <li className="dk-headerLi">
                                    Furniture
                                    </li>
                                <span className="dk-headerSlash">/</span>
                                <li className="dk-headerLi">
                                    Tables & desks
                                    </li>
                                <span className="dk-headerSlash">/</span>
                                <li className="dk-headerLi">
                                    {this.state.list[0].name} {this.state.list[0].shortDesc.split(',')[0]}
                                </li>
                            </ol>
                        </div>
                        <div className="dk-carouselAndProductInfo">
                            <Carousel indexGetter={this.indexGetter} zoom={this.zoomHandler} />
                            <div className="dk-productDetail">
                                <div>
                                    <ProductDetail data={this.state.list[0]} />
                                </div><br />
                                <div><OptionButtons data={this.state.list} /></div>
                                <div><AvailableOptions /></div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                // console.log('index!?!? -----', this.state.currentIndex)
                // console.log('list exist?!?!?', this.state.list[0].imageSrc.length)
                return (
                    <div className="dk-zoomImageDiv">
                        <button className="dk-zoomCloseButton" onClick={() => { this.zoomHandler() }}>
                            <svg width="20" height="20">
                                <path d="M17.597 5l-5.592 5.592L6.414 5 5 6.415l5.591 5.591L5 17.597l1.414 1.414 5.591-5.592 5.592 5.592 1.414-1.414-5.592-5.591 5.592-5.591z" />
                            </svg>
                        </ button>
                        <div className="dk-zoomImage" style={{ 'transform': `translateY(-${this.state.currentIndex * (100 / this.state.list[0].imageSrc.length)}%)` }}>

                            {this.state.list[0].imageSrc.map((img) => (
                                < ZoomImages list={img} key={img} />
                            ))}
                        </div>
                    </div>
                )
            }
        }
    }
}

export default App;