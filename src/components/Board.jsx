import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ handleClick, squares, disabled }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square disabled={disabled} id={i} handleClick={handleClick} key={i} value={square} />
    ))}
  </div>
);

export default Board;
