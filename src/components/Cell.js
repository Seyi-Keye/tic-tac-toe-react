import React, { Component } from 'react';

export class Cell extends Component {
  constructor() {
    super();
    this.state = {
      symbol: ""
    }
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay() {
    const click = this.props.click + 1;
    if (!this.state.symbol) {
      if (click%2 ===1) {
        this.setState({symbol: "glyphicon glyphicon-remove" })
      } else {
        this.setState({ symbol: "glyphicon glyphicon-ok" })
      }
      console.log(this.props.index, "index")
      this.props.updateClick(click, this.props.index);
    }
  }

  render() {
    return(
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          height: "100px",
          display: "inline-block"
        }}
        onClick={this.handleDisplay}
      >
  <span
    className={this.state.symbol}>
    </span>
</div>
    )
  }
}
