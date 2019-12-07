import React from 'react';
import styled from 'styled-components';


const StyledReviewCount = styled.span`
color: #0058a3;
:hover {
    text-decoration: underline;
  }
`

const StyledRating = styled.span`
padding-right: 0.5rem;
font-size: 17px;
`

const StyledReviewComponent = styled.a`
cursor: pointer;
`

class StarReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ratings: this.props.rating,
            counter: 0,
            container: []
        }
    }

    getReview() {
        function roundNum(x, precision) {
            var y = +x + (precision === undefined ? 0.5 : precision / 2);
            return y - (y % (precision === undefined ? 1 : +precision));
        }

        var roundedNum = roundNum(this.props.rating, 0.5)

        this.setState({
            ratings: roundedNum
        })

        for (var i = 0; i < 5; i++) {
            if (this.state.ratings - 1 >= 0) {
                this.state.container.push(
                    <span><svg viewBox="0 0 100 100" width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path fill="#ffd200" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" /></svg></span>
                )
                this.state.ratings--
            } else if (this.state.ratings === 0.5) {
                this.state.container.push(
                    <span>

                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            width="25" height="25" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="half_grad">
                                    <stop offset="50%" stop-color="#ffd200" />
                                    <stop offset="50%" stop-color="#EEE" stop-opacity="1" />
                                </linearGradient>
                            </defs>

                            <path fill="url(#half_grad)" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" />
                        </svg>
                    </span>
                )
                this.state.ratings -= 0.5
            } else {
                this.state.container.push(
                    <span>
                        <svg viewBox="0 0 100 100" width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path fill="#EEE" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" /></svg>
                    </span>
                )
            }
        }
    }

    componentDidMount() {
        setTimeout(() => { this.getReview() }, 10)
    }

    render() {

        return (
            <StyledReviewComponent>

                <span>
                    {this.state.container}
                </span>
                <StyledRating>
                    {this.props.rating}
                </StyledRating>

                <StyledReviewCount>
                    {this.props.reviewNum} Reviews
                </StyledReviewCount>


            </StyledReviewComponent>

        )

    }
}

export default StarReview;