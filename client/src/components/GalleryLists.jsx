import React from 'react';
import GalleryListsEntry from './GalleryListsEntry.jsx'

const GalleryLists = (props) => (
  props.lists.map((list) => (
    < div key={`galley-lists-${list}`}>
      <GalleryListsEntry list={list} getIndex={props.index} url={props.url} /> <br />
    </div >
  )
  ))

export default GalleryLists;


