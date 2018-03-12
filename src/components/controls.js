import React, { Component } from "react";
import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap";

export default class Controls extends Component {
  handleSelect = (event) => {
    this.props.boardSize(event);
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
          <button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-default" onClick={this.props.normal}>
            Normal
          </button>
          <button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </button>
          <DropdownButton
            title="Board Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <MenuItem eventKey="1">20 x 10</MenuItem>
            <MenuItem eventKey="2">50 x 30</MenuItem>
            <MenuItem eventKey="3">70 x 50</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}
