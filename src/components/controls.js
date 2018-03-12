import React, { Component } from "react";
import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap";

export default class Controls extends Component {
  handleSizeSelect = (event) => {
    this.props.boardSize(event);
  }

  handleSpeedSelect = (event) => {
    this.props.boardSpeed(event);
  }

  handleShapeSelect = (event) => {
    this.props.buildShape(event);
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
            onSelect={this.handleSizeSelect}
          >
            <MenuItem eventKey="small">Small</MenuItem>
            <MenuItem eventKey="medium">Medium</MenuItem>
            <MenuItem eventKey="large">Large</MenuItem>
          </DropdownButton>
          <DropdownButton
            title="Shapes"
            id="shapes"
            onSelect={this.handleShapeSelect}
          >
            <MenuItem eventKey="glider">Gilder</MenuItem>
            <MenuItem eventKey="exploder">Exploder</MenuItem>
            <MenuItem eventKey="10-cell-row">10 Cell Row</MenuItem>
            <MenuItem eventKey="lightweight-spaceship">Lightweight Spaceship</MenuItem>
            <MenuItem eventKey="tumbler">Tumbler</MenuItem>
            <MenuItem eventKey="gospel-glider-gun">Gospel Gilder Gun</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}
