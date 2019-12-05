import React from 'react';
import styled from 'styled-components';

const StyledStarOuter = styled.svg`
    position: relative;
    display: inline-block;
    
`

const StyledStarsInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    width: 0;
`

class StarReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ratings: this.props.rating
        }
    }

    getRating() {
        const starsTotal = 5;
        const starPercentage = (this.state.ratings / starsTotal) * 100;

        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;


    }

    render() {
        return (
            <div>


                <path fill="#EEE" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" />
                <div>
                    <path fill="#EEE" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" />

                </div><path fill="#EEE" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" />
                <path fill="#EEE" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" />
                <path fill="#EEE" d="M50 73l29.39 21.45-11.32-34.579L97.553 38.55l-36.385.08L50 4 38.832 38.629l-36.385-.08L31.93 59.871l-11.32 34.58z" fill-rule="evenodd" />


            </div>
        )
    }
}

export default StarReview;