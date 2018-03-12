import React from "react";
import PropTypes from "prop-types";
import Box from "./box";

const GameBoard = (props) => {
  const {
    rows, cols, board, selectBox,
  } = props;
  const width = cols * 16;
  const rowsArray = [];

  let boxClass = "";
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const boxId = `${i}_${j}`;
      boxClass = board[i][j] ? "box on" : "box off";
      rowsArray.push(<Box
        key={boxId}
        boxClass={boxClass}
        boxId={boxId}
        row={i}
        col={j}
        selectBox={selectBox}
      />);
    }
  }
  return (
    <div className="game-board" style={{ width }}>
      {rowsArray}
    </div>
  );
};

export default GameBoard;

GameBoard.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  selectBox: PropTypes.func.isRequired,
};
