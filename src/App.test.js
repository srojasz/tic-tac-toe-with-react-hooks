import React from "react";
import { render } from "@testing-library/react";
import Board from "./components/Board";

describe("Board", () => {
  test("renders Board component", () => {
    const squares = ["x", "x", "x", null, "o", "o", "x", "o", null];
    const handleClick = jest.fn();
    render(
      <Board handleClick={handleClick} squares={squares} disabled={true} />
    );
  });
  // test("Board has 9 squares", () => {
  //   const squares = document.QuerySelectorAll("[data-js-square]");
  //   const squaresNum = squares.length;
  //   expect(squaresNum).toEqual(9);
  // });
});

// test("renders Board and finds 9 squares", () => {
//   render(<Board />);
//   const squares = document.QuerySelectorAll("[data-js-square]");
//   const squaresNum = squares.length;
//   expect(squaresNum).toBe(9);
// });
