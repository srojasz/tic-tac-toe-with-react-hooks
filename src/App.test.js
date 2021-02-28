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
});
