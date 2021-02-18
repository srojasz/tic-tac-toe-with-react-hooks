export const calculateWinner = (squares) => {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winner = winningPositions.filter((position) => {
    const [a, b, c] = position;
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
  });

  if (winner.length > 0) {
    return winner[0];
  }

  // for (let i = 0; i < winningPositions.length; i++) {
  //   const [a, b, c] = winningPositions[i];

  //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //     return squares[a];
  //   }
  // }
  return null;
};
