import { calculateWinner } from "./calculate-winner";

describe("Calculate winner", () => {
  const positionsWinX = ["x", "x", "x", null, "o", "o", "x", "o", null];
  const positionsWin0 = ["o", "x", "x", "o", null, null, "o", "x", "x"];

  it.todo("has to return the player symbol when that player wins");

  it.todo("has to return `null` when no player has won yet");
  it.todo(
    "has to throw an Error when the game is over (no more squares left to click"
  );
});
