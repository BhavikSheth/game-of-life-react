import React from "react";

export default (props) => {
  const { boxClass, boxId } = props;
  return (
    <div
      className={boxClass}
      id={boxId}
    />
  );
};
