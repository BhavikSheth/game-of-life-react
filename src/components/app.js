import React, { Component } from "react";
import GameBoard from "./gameBoard";
import Controls from "./controls";

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

class App extends Component {
  constructor() {
    super();

    this.speed = 10;
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
    const boardCopy = arrayClone(this.state.board);
    boardCopy[row][col] = !boardCopy[row][col];
    this.setState({
      board: boardCopy,
    });
  }

  boardSize = (size) => {
    this.pause();
    switch (size) {
      case "small":
        this.rows = 20;
        this.cols = 30;
        break;
      case "medium":
        this.rows = 35;
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
        this.speed = 250;
        break;
      case "normal":
        this.speed = 100;
        break;
      default:
        this.speed = 10;
    }
    this.start();
  }

  buildShape = (shape) => {
    const newBoard = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
    const rowsMidpoint = this.rows / 2;
    const colsMidpoint = this.cols / 2;
    switch (shape) {
      case "glider":
        newBoard[rowsMidpoint - 1][colsMidpoint] = true;
        newBoard[rowsMidpoint][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint + 1] = true;
        break;
      case "exploder":
        newBoard[rowsMidpoint - 2][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint - 1][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint - 1][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint + 2] = true;
        break;
      case "10-cell-row":
        newBoard[rowsMidpoint][colsMidpoint - 5] = true;
        newBoard[rowsMidpoint][colsMidpoint - 4] = true;
        newBoard[rowsMidpoint][colsMidpoint - 3] = true;
        newBoard[rowsMidpoint][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint][colsMidpoint] = true;
        newBoard[rowsMidpoint][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint][colsMidpoint + 3] = true;
        newBoard[rowsMidpoint][colsMidpoint + 4] = true;
        break;
      case "lightweight-spaceship":
        newBoard[rowsMidpoint - 2][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint - 1][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint - 1][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint + 1] = true;
        break;
      case "tumbler":
        newBoard[rowsMidpoint - 3][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint - 3][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint - 3][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint - 3][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint - 1][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint - 1][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint][colsMidpoint - 3] = true;
        newBoard[rowsMidpoint][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint][colsMidpoint + 3] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint - 3] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint + 1] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint + 3] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint - 3] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint + 2] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint + 3] = true;
        break;
      case "gospel-glider-gun":
        newBoard[rowsMidpoint - 7][colsMidpoint + 4] = true;
        newBoard[rowsMidpoint - 7][colsMidpoint + 5] = true;
        newBoard[rowsMidpoint - 7][colsMidpoint + 15] = true;
        newBoard[rowsMidpoint - 7][colsMidpoint + 16] = true;
        newBoard[rowsMidpoint - 6][colsMidpoint + 3] = true;
        newBoard[rowsMidpoint - 6][colsMidpoint + 5] = true;
        newBoard[rowsMidpoint - 6][colsMidpoint + 15] = true;
        newBoard[rowsMidpoint - 6][colsMidpoint + 16] = true;
        newBoard[rowsMidpoint - 5][colsMidpoint - 19] = true;
        newBoard[rowsMidpoint - 5][colsMidpoint - 18] = true;
        newBoard[rowsMidpoint - 5][colsMidpoint - 10] = true;
        newBoard[rowsMidpoint - 5][colsMidpoint - 9] = true;
        newBoard[rowsMidpoint - 5][colsMidpoint + 3] = true;
        newBoard[rowsMidpoint - 5][colsMidpoint + 4] = true;
        newBoard[rowsMidpoint - 4][colsMidpoint - 19] = true;
        newBoard[rowsMidpoint - 4][colsMidpoint - 18] = true;
        newBoard[rowsMidpoint - 4][colsMidpoint - 11] = true;
        newBoard[rowsMidpoint - 4][colsMidpoint - 9] = true;
        newBoard[rowsMidpoint - 3][colsMidpoint - 11] = true;
        newBoard[rowsMidpoint - 3][colsMidpoint - 10] = true;
        newBoard[rowsMidpoint - 3][colsMidpoint - 3] = true;
        newBoard[rowsMidpoint - 3][colsMidpoint - 2] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint - 3] = true;
        newBoard[rowsMidpoint - 2][colsMidpoint - 1] = true;
        newBoard[rowsMidpoint - 1][colsMidpoint - 3] = true;
        newBoard[rowsMidpoint][colsMidpoint + 16] = true;
        newBoard[rowsMidpoint][colsMidpoint + 17] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint + 16] = true;
        newBoard[rowsMidpoint + 1][colsMidpoint + 18] = true;
        newBoard[rowsMidpoint + 2][colsMidpoint + 16] = true;
        newBoard[rowsMidpoint + 5][colsMidpoint + 5] = true;
        newBoard[rowsMidpoint + 5][colsMidpoint + 6] = true;
        newBoard[rowsMidpoint + 5][colsMidpoint + 7] = true;
        newBoard[rowsMidpoint + 6][colsMidpoint + 5] = true;
        newBoard[rowsMidpoint + 7][colsMidpoint + 6] = true;
        break;
      default:
        this.setState({
          board: newBoard,
        });
    }
    this.setState({
      board: newBoard,
    });
  }

  seed = () => {
    const boardCopy = arrayClone(this.state.board);
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
    this.pause();
    this.setState({
      board: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
      generations: 0,
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
          buildShape={this.buildShape}
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

export default App;
