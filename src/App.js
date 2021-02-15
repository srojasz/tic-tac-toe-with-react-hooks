import { useState } from "react";

import Board from "./components/Board";
import Reset from "./components/Reset";

import { calculateWinner } from "./utils/calculate-winner";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const App = () => {
  // States.
  const [isTimeToX, setIsTimeToX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [aWinner, setAWinner] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Player symbol.
  const player = isTimeToX ? "X" : "O";

  // Handle Click.
  const handleClick = (squareNumber) => {
    setIsTimeToX(!isTimeToX);
    const newBoard = [...squares];
    newBoard.splice(squareNumber, 1, player);
    setSquares(newBoard);

    if (calculateWinner(newBoard)) {
      setIsTimeToX(isTimeToX);
      setAWinner(player);
      setDisabled(true);
      setSquares(newBoard);
    } else if (!newBoard.includes(null)) {
      setDisabled(true);
      setSquares(newBoard);
    }
  };

  const handleReset = () => {
    setIsTimeToX(true);
    setSquares(Array(9).fill(null));
  };

  return (
    <div style={style}>
      <Board
        handleClick={handleClick}
        squares={squares}
        disabled={disabled}
        calculateWinner={calculateWinner}
      />
      {aWinner ? (
        <p>
          The winner is: <strong>{player}</strong>
        </p>
      ) : null}
      {!squares.includes(null) ? <Reset handleReset={handleReset} /> : null}
    </div>
  );
};

export default App;
