import React, { useState } from "react";
import Board from "./Board";
import { findWinner, isMatchDrawn } from "./helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = findWinner(board);
  const matchDrawn = isMatchDrawn(board);

  const onSquareClicked = (square) => {
    const clonedBoard = [...board];
    if (matchDrawn) {
      return;
    }
    if (winner || clonedBoard[square]) {
      return;
    }
    clonedBoard[square] = xIsNext ? "X" : "O";
    setBoard(clonedBoard);
    setXisNext(!xIsNext);
  };

  return (
    <div>
      <Board squares={board} onClick={onSquareClicked} />
      {winner && <h2>Winner is: {winner}</h2>}
      {!winner && matchDrawn && <h2> Match Drawn </h2>}
      {!winner && !matchDrawn && (
        <h3>Next Player turn: {xIsNext ? "X" : "O"}</h3>
      )}
    </div>
  );
};

export default Game;
