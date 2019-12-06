import React from 'react';
import StyledButton from './styledComponents/styledButton.jsx';
import styled from 'styled-components'

const StyledSelected = styled.button`
padding: 0;
    margin: 7px;
    vertical-align: top;
    cursor: pointer;
border: 2px solid black;
`

class GalleryListsEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false,
      url: null
    }

    this.selectHandler = this.selectHandler.bind(this)

  }

  // getProps() {

  //   this.setState({
  //     url: this.props.url
  //   })
  // }

  selectHandler() {
    // console.log('lists!!!!!!!', this.props.list)
    // console.log('currentUrl', this.props.url)
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
        <StyledButton onClick={this.selectHandler}>

          <img src={this.props.list} onClick={() => { this.props.getIndex(this.props.list); setTimeout(() => { this.selectHandler() }, 10) }} width="75" height="75" />

        </StyledButton>
      )
    } else {
      return (
        <StyledSelected>

          <img src={this.props.list} width="75" height="75" />

        </StyledSelected>
      )
    }
  }
}

export default GalleryListsEntry;