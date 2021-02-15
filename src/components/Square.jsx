import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ( {value, handleClick, square, id, disabled} ) => {
  const onClick = () => {
    if (!value) {
      handleClick(id);
    }
  };

  return <button disabled={disabled} id={square} onClick={onClick} style={style}>{value}</button>;
};
export default Square;
