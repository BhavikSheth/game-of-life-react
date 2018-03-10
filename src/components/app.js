import React, { Component } from "react";
import GameBoard from "./gameBoard";

class App extends Component {
  constructor() {
    super();

    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generations: 0,
      board: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
    };
  }

  selectBox = (row, col) => {
    let boardCopy = arrayClone(this.state.board);
    boardCopy[row][col] = !boardCopy[row][col];
    this.setState({
      board: boardCopy,
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Game of Life</h1>
        <GameBoard
          board={this.state.board}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generations}</h2>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default App;
