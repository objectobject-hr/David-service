import React from 'react';
import GalleryListsEntry from './GalleryListsEntry.jsx'

const GalleryLists = (props) => (
  props.lists.map((list, i) => (
    <GalleryListsEntry list={list} key={i}/>
  )
))

export default GalleryLists;


