import React from "react";
import PropTypes from "prop-types";

const Box = (props) => {
  const {
    boxClass, boxId, row, col, selectBox,
  } = props;
  return (
    <div
      className={boxClass}
      id={boxId}
      onClick={() => (selectBox(row, col))}
    />
  );
};
export default Box;

Box.propTypes = {
  boxClass: PropTypes.string.isRequired,
  boxId: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  selectBox: PropTypes.func.isRequired,
};
