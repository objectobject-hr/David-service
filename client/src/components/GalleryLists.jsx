import React from 'react';
import GalleryListsEntry from './GalleryListsEntry.jsx'

const GalleryLists = (props) => (
  props.lists.map((list, index) => (
    < div >
      <GalleryListsEntry list={list} key={index} getIndex={props.index} url={props.url} /> <br />
    </div >
  )
  ))

export default GalleryLists;


