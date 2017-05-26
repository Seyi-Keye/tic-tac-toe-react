import React, { Component } from 'react';

export class Cell extends Component {
  constructor() {
    super();
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const click = this.props.click + 1;
    this.props.updateClick(click, this.props.index);
  }

  handleDisplay() {
    const symbol = this.props.symbol;
    if (symbol === "x") {
      return "glyphicon glyphicon-remove";
    } else if (symbol === "o") {
      return "glyphicon glyphicon-ok";
    }
  }

  render() {
    return(
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          height: "100px",
          display: "inline-block",
          textAlign: "center",
          fontSize: "30px",
          verticalAlign: "top"
        }}
        onClick={this.handleClick}
      >
  <span
    style={{
      marginTop: "35px"
    }}
    className={this.handleDisplay()}>
    </span>
</div>
    )
  }
}
