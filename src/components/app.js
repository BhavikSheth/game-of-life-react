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

  seed = () => {
    let boardCopy = arrayClone(this.state.board);
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.cols; j += 1) {
        if (Math.floor(Math.random() * 4) === 0) {
          boardCopy[i][j] = true;
        }
      }
    }
    this.setState({
      board: boardCopy,
    });
  }

  start = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  }

  play = () => {
    const { board } = this.state;
    const boardCopy = arrayClone(this.state.board);

    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.cols; j += 1) {
        let count = 0;
        if (i > 0) if (board[i - 1][j]) count += 1;
        if (i > 0 && j > 0) if (board[i - 1][j - 1]) count += 1;
        if (i > 0 && j < this.cols - 1) if (board[i - 1][j + 1]) count += 1;
        if (j < this.cols - 1) if (board[i][j + 1]) count += 1;
        if (j > 0) if (board[i][j - 1]) count += 1;
        if (i < this.rows - 1) if (board[i + 1][j]) count += 1;
        if (i < this.rows - 1 && j > 0) if (board[i + 1][j - 1]) count += 1;
        if (i < this.rows - 1 && this.cols - 1) if (board[i + 1][j + 1]) count += 1;
        if (board[i][j] && (count < 2 || count > 3)) boardCopy[i][j] = false;
        if (!board[i][j] && count === 3) boardCopy[i][j] = true;
      }
    }

    this.setState({
      board: boardCopy,
      generations: this.state.generations + 1,
    });
  }

  componentDidMount() {
    this.seed();
    this.start();
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
