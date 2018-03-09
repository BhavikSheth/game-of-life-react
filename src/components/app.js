import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generations: 0,
    };
  }
  render() {
    return (
      <div className="app">
        <h1>Game of Life</h1>
        <h2>Generations: {this.state.generations}</h2>
      </div>
    );
  }
}

export default App;
