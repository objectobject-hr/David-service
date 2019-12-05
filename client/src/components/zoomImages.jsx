import React from 'react';
import styled from 'styled-components';

const StyledImages = styled.div`
text-align: center;
`

const ZoomImages = (props) => {

    return (<StyledImages>
        <img src={props.list} />

    </StyledImages>
    )
}

export default ZoomImages;