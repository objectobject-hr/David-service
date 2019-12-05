import React from 'react';
import Carousel from './Carousel.jsx';
import ProductDetail from './productDetail.jsx';
import OptionButtons from './optionsButtons.jsx';
import axios from 'axios'
import styled from 'styled-components';

const StyledProductDetail = styled.div`
width: 25rem;
background-color: white;
top: 3rem;
position: absolute;
height: 700px;
right: 150px;
padding-right: 50px;
padding-left: 50px;
`;

const StyledBody = styled.div`
margin-left: 20rem;
margin-right: 20rem;
`

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
                    <StyledBody>
                        <div>
                            <Carousel />
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
        }
    }
}

export default App;