import React from 'react';
import Carousel from './Carousel.jsx';
import ProductDetail from './productDetail.jsx';
import OptionButtons from './optionsButtons.jsx';
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            list: null
        }
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

    render() {
        if (this.state.list === null) {
            return null
        } else {
            return (
                <div>
                    <div><Carousel /></div>
                    <div className="product detail">
                        <ProductDetail data={this.state.list[0]} />
                    </div><br />
                    <div><OptionButtons /></div>
                </div>
            )
        }
    }
}

export default App;