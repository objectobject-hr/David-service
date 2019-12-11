import React from 'react';
import GalleryListsEntry from './GalleryListsEntry.jsx'

const GalleryLists = (props) => (
  props.lists.map((list, i) => (
    < div >
      <GalleryListsEntry list={list} key={i} getIndex={props.index} url={props.url} /> <br />
    </div >
  )
  ))

export default GalleryLists;


