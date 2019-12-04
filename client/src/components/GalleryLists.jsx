import React from 'react';
import GalleryListsEntry from './GalleryListsEntry.jsx'

const GalleryLists = (props) => (
  props.lists.map((list, i) => (
    <div>
      <GalleryListsEntry list={list} key={i} /><br />
    </div>
  )
  ))

export default GalleryLists;


