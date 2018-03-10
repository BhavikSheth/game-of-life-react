import React from "react";

export default (props) => {
  const { boxClass, boxId, row, col } = props;
  return (
    <div
      className={boxClass}
      id={boxId}
      onClick={() => (props.selectBox(row, col))}
    />
  );
};
