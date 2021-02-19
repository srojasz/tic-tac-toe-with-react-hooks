import { calculateWinner } from "./calculate-winner";

describe("Calculate winner", () => {
  const rowWinX = ["x", "x", "x", null, "o", "o", "x", "o", null];
  const columnWinO = ["o", "x", "x", "o", null, null, "o", "x", "x"];
  const noWinnerPosit = ["x", "o", "x", "o", "x", "o", "o", "x", "o"];
  const noWinnerYet = ["o", null, "x", null, "x", "o", "x", null, "o"];
  const oneMovement = [null, "x", null, null, null, null, null, null, null];
  const oneMovementLeft = ["o", "x", "o", "x", "o", "x", "x", "o", null];
  const diagonalWinX = ["x", "o", null, "o", "x", null, "x", "o", "x"];

  it("has to return the player symbol when that player wins", () => {
    expect(calculateWinner(columnWinO).toBe("o"));
    expect(calculateWinner(rowWinX).toBe("x"));
    expect(calculateWinner(diagonalWinX).toBe("x"));
  });

  it("has to return `null` when no player has won yet", () => {
    expect(calculateWinner(oneMovement).toBe(null));
    expect(calculateWinner(noWinnerYet).toBe(null));
    expect(calculateWinner(oneMovementLeft).toBe(null));
  });

  it("has to throw an Error when the game is over (no more squares left to click", () => {
    expect(calculateWinner(noWinnerPosit).toBe("Error"));
  });
});
