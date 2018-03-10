import React from "react";
import Box from "./box";

export default (props) => {
  const { rows, cols, board } = props;
  const width = cols * 14;
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
      />);
    }
  }
  return (
    <div className="game-board">
      {rowsArray}
    </div>
  );
};









// import React, { Component } from "react";

// class GameBoard extends Component {
  
//   render() {
//     return (
//       <div className="game-board">
//         Test
//       </div>    
//     );
//   }
// }

// export default GameBoard;
