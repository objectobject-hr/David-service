import React from 'react';
import GalleryListsEntry from './GalleryListsEntry.jsx'

const GalleryLists = (props) => (
  props.lists.map((list, i) => (
    <div>
      <GalleryListsEntry list={list} key={i} getIndex={props.index} getUrl={props.getUrl} url={props.url} /><br />
    </div>
  )
  ))

export default GalleryLists;


