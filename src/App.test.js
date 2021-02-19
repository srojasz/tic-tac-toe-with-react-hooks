import { render } from "@testing-library/react";
import Board from "./components/Board";

test("renders Board and finds 9 squares", () => {
  render(<Board />);
  const squares = document.QuerySelectorAll("[data-js-square]");
  const squaresNum = squares.length;
  expect(squaresNum).toBe(9);
});
