import React from 'react';
import StyledButton from './styledComponents/styledButton.jsx'

const GalleryListsEntry = (props) => {
  return (
    <StyledButton>

      <img src={props.list} onClick={() => { props.getIndex(props.list) }} width="75" height="75" />

    </StyledButton>
  )
}

export default GalleryListsEntry;