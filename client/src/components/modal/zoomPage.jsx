import React from 'react';
import PropTypes from 'prop-types';
import ZoomImages from '../zoomImages.jsx';

export default class ZoomPageModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="zoomImageOverFlow">
                <button className="dk-zoomCloseButton" onClick={this.props.onClose}>
                    <svg width="20" height="20">
                        <path d="M17.597 5l-5.592 5.592L6.414 5 5 6.415l5.591 5.591L5 17.597l1.414 1.414 5.591-5.592 5.592 5.592 1.414-1.414-5.592-5.591 5.592-5.591z" />
                    </svg>
                </ button>
                <div className="dk-zoomImage" style={{ 'transform': `translateY(-${(this.props.index * (100 / this.props.imageSrc.length) + 1)}%)` }}>

                    {this.props.imageSrc.map((img) => (
                        < ZoomImages list={img} key={img} />
                    ))}
                </div>
            </div >
        )
    }
}
//


ZoomPageModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
};