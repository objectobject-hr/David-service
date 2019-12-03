import React from 'react';

const GalleryListsEntry = (props) => {
  return (
    <button><img src={props.list.src} width="75" height="75"/></button>
  )
}

export default GalleryListsEntry;