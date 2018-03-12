import React from "react";
import Box from "./box";

export default (props) => {
  const { rows, cols, board, selectBox } = props;
  const width = cols * 16;
  let rowsArray = [];

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
