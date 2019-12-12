import React from 'react';

class GalleryListsEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false,
      url: null
    }

    this.selectHandler = this.selectHandler.bind(this)

  }

  selectHandler() {
    if (this.props.url === this.props.list)
      this.setState({
        selected: true
      })
  }

  componentDidMount() {
    this.selectHandler()
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({
        selected: false
      })
    }
    setTimeout(this.selectHandler, 10)
  }


  render() {

    if (this.state.selected === false) {

      return (
        <button className="dk-galleryListButton" onClick={this.selectHandler}>

          <img src={this.props.list} onClick={() => { this.props.getIndex(this.props.list); setTimeout(() => { this.selectHandler() }, 10) }} width="75" height="75" />

        </button>
      )
    } else {
      return (
        <button className="dk-gallerySelectedButton">

          <img src={this.props.list} width="75" height="75" />

        </button>
      )
    }
  }
}

export default GalleryListsEntry;