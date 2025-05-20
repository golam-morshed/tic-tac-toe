import lottie from "lottie-web";
import React, { useEffect } from "react";
import Square from "./Square";
export default function Board({ currentSquare: squares, xIsNext, handleMove }) {
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal from top-left
      [2, 4, 6], // diagonal from top-right
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const updateSqare = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    handleMove(newSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player is ${xIsNext ? "X" : "O"}`;

  useEffect(() => {
    console.log("winner", winner);
    if (winner) {
      const winnerAnimation = document.getElementById("winner_animation");
      const anim = lottie.loadAnimation({
        container: winnerAnimation, // the dom element that will contain the animation
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "public/celebrate.json", // the path to the animation json
      });
      winnerAnimation.classList.remove("hidden");
      // play animation when winner is found
      anim.play();

      setTimeout(() => {
        anim.destroy();
        winnerAnimation.classList.add("hidden");
      }, 1300);
    }
  }, [winner]);

  return (
    <div className="flex flex-col w-[150px]">
      <h2 className=" text-md text-center">
        <b>{status}</b>
      </h2>
      <div className="grid grid-cols-3 border-1 border-gray-200 mt-3 relative">
        {squares.map((square, i) => (
          <Square key={i} value={square} index={i} method={updateSqare} />
        ))}
        <div
          id="winner_animation"
          className="absolute w-full h-full left-0 top-0 hidden bg-white/80"
        ></div>
      </div>
    </div>
  );
}
