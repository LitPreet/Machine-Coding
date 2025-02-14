import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid
  const [isXNext, setIsXNext] = useState(true); // Track which player's turn it is
  const [winner, setWinner] = useState(null); // Winner state

  const handleClick = (index:number) => {
    if (board[index] || winner) return; // Prevent overwriting or playing after game over

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const newWinner = checkWinner(newBoard);
    if (newWinner) setWinner(newWinner);
  };

  const checkWinner = (board:any[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Tic-Tac-Toe</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "5px",
          justifyContent: "center",
        }}
      >
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              border: "1px solid black",
              cursor: "pointer",
              background: cell ? "#f0f0f0" : "#fff",
            }}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner && <h2>Winner: {winner}</h2>}
      {!winner && !board.includes(null) && <h2>It's a Draw!</h2>}
      <button
        onClick={resetGame}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
