import React, { Component } from "react";
import GameBoard from "./gameBoard";
import Controls from "./controls";

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

  componentDidMount() {
    this.seed();
    this.start();
  }

  selectBox = (row, col) => {
    let boardCopy = arrayClone(this.state.board);
    boardCopy[row][col] = !boardCopy[row][col];
    this.setState({
      board: boardCopy,
    });
  }

  boardSize = (size) => {
    this.pause();
    switch (size) {
      case "1":
        this.rows = 10;
        this.cols = 20;
        break;
      case "2":
        this.rows = 30;
        this.cols = 50;
        break;
      default:
        this.rows = 50;
        this.cols = 70;
    }
    this.clear();
  }

  boardSpeed = (speed) => {
    switch (speed) {
      case "slow":
        this.speed = 500;
        break;
      case "normal":
        this.speed = 250;
        break;
      default:
        this.speed = 100;
    }
    this.start();
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

  pause = () => {
    clearInterval(this.intervalId);
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

  clear = () => {
    this.setState({
      board: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Game of Life</h1>
        <Controls
          start={this.start}
          pause={this.pause}
          clear={this.clear}
          seed={this.seed}
          boardSize={this.boardSize}
          boardSpeed={this.boardSpeed}
        />
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
