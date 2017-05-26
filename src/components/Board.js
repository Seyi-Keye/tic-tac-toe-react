import React, { Component } from 'react';
import { Cell } from './Cell';
import { matchWinningCells } from '../helper';
import toastr from 'toastr';

export class Board extends Component {
  constructor() {
    super();
    this.state = {
      click: 0,
      cells: []
    }
    this.updateClick = this.updateClick.bind(this);
    this.checkWinning = this.checkWinning.bind(this);
  }

  updateClick(click, index) {
    const cells = this.state.cells;
    const symbol = click%2 ? 'x' : 'o';
    cells[index] = symbol;
    this.setState({click, cells}, () => {
      this.checkWinning(symbol);
    });
  }

  checkWinning(symbol) {
    const cells = this.state.cells;
    if (matchWinningCells(cells, symbol)) {
      toastr.success(`${symbol} has won`);
      this.setState ({
        click: 0,
        cells: []
      });
    }
  }

  buildBoard(){
    const cells = [];
    for(let i = 0; i< 9; i++) {
      cells.push(
        <Cell
          key={i}
          index={i}
          click={this.state.click}
          updateClick={this.updateClick}
          symbol={this.state.cells[i]}
        />);
    }
    return cells;
  }

  render() {
    return(
      <div
        style={{
          width: "350px"
          }}
      >
        {this.buildBoard()}
      </div>
    );
  }
}