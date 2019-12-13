import React from 'react';
import Carousel from './Carousel.jsx';
import ProductDetail from './productDetail.jsx';
import OptionButtons from './optionsButtons.jsx';
import axios from 'axios'
import AvailableOptions from './AvailableOptions.jsx';
import Modal from './modal/modal.jsx';
import ZoomPageModal from './modal/zoomPage.jsx';

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
        this.showModal = this.showModal.bind(this)
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

    showModal(e) {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

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
                    <Modal>
                        <ZoomPageModal index={this.state.currentIndex} onClose={this.showModal} zoom={this.zoomHandler} imageSrc={this.state.list[0].imageSrc} show={this.state.isOpen} />
                    </Modal>
                )
            }
        }
    }
}

export default App;