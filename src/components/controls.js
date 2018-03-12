import React, { Component } from "react";
import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap";

export default class Controls extends Component {
  handleSelect = (event) => {
    this.props.boardSize(event);
  }

  handleSpeedSelect = (event) => {
    this.props.boardSpeed(event);
  }

  render() {
    return (
      <div className="controls">
        <ButtonToolbar>
          <button className="btn btn-default" onClick={this.props.start}>
            Play
          </button>
          <button className="btn btn-default" onClick={this.props.pause}>
            Pause
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </button>
          <DropdownButton
            title="Speed"
            id="speed-menu"
            onSelect={this.handleSpeedSelect}
          >
            <MenuItem eventKey="slow">Slow</MenuItem>
            <MenuItem eventKey="normal">Normal</MenuItem>
            <MenuItem eventKey="fast">Fast</MenuItem>
          </DropdownButton>
          <DropdownButton
            title="Board Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <MenuItem eventKey="small">Small</MenuItem>
            <MenuItem eventKey="medium">Medium</MenuItem>
            <MenuItem eventKey="large">Large</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}
