import React, { Component } from "react";
import GameBoard from "./gameBoard";

class App extends Component {
  constructor() {
    super();

    this.speed = 100;
    this.row = 30;
    this.cols = 50;

    this.state = {
      generations: 0,
      board: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
    };
  }
  render() {
    return (
      <div className="app">
        <h1>Game of Life</h1>
        <GameBoard
          board={this.state.board}
          rows={this.rows}
          cols={this.cols}
        />
        <h2>Generations: {this.state.generations}</h2>
      </div>
    );
  }
}

export default App;
