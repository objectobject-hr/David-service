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
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({
        selected: false
      })
    }
  }

  selectHandler() {
    this.setState({
      selected: true
    })
  }

  render() {
    if (this.state.selected === false) {
      console.log(this.props)
      return (
        <StyledButton>

          <img src={this.props.list} onClick={() => { this.selectHandler(); this.props.getIndex(this.props.list); this.props.getUrl(this.props.list) }} width="75" height="75" />

        </StyledButton>
      )
    } else {
      return (
        <StyledSelected>

          <img src={this.props.list} onClick={() => { this.props.getIndex(this.props.list) }} width="75" height="75" />

        </StyledSelected>
      )
    }
  }
}

export default GalleryListsEntry;