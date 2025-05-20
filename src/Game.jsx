import { useState } from "react";
import Board from "./components/Board";
import HistoryList from "./components/HistoryList";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentHistoryPoint, setCurrentHistoryPoint] = useState(0);
  const currentSquares = history[currentHistoryPoint];
  const handleMove = (newSquares) => {
    const updatedHistory = [
      ...history.slice(0, currentHistoryPoint + 1),
      newSquares,
    ];
    setHistory(updatedHistory);
    setCurrentHistoryPoint(updatedHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="w-[450px] py-6 px-10 mx-auto mt-20 bg-amber-100">
      <h1 className="text-2xl text-center font-bold">Tic-Tac-Toe Game</h1>
      <div className="my-10 flex justify-between gap-8">
        <Board
          currentSquare={currentSquares}
          xIsNext={xIsNext}
          handleMove={handleMove}
        />
        <HistoryList
          history={history}
          setCurrentHistoryPoint={setCurrentHistoryPoint}
          setXIsNext={setXIsNext}
        />
      </div>
    </div>
  );
}

export default Game;
