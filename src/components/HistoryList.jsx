import React from "react";

export default function HistoryList({
  history,
  setCurrentHistoryPoint,
  setXIsNext,
}) {
  const jumpToHistory = (nextHistoryStep, setCurrentHistoryPoint) => {
    setCurrentHistoryPoint(nextHistoryStep);
    setXIsNext(nextHistoryStep % 2 === 0);
  };
  return (
    <div>
      <h2 className="text-md">Browse history</h2>
      <div className="flex flex-col mt-3">
        {history.map((item, index) => (
          <button
            type="button"
            key={index}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-green-600 focus:ring-2 focus:ring-green-700 focus:bg-green-600  font-medium rounded-sm text-sm px-5 py-1 me-2 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-green-700 dark:hover:border-green-600 dark:focus:bg-green-700 dark:focus:ring-green-700 cursor-pointer"
            onClick={() => jumpToHistory(index, setCurrentHistoryPoint)}
          >
            {index === 0 ? "Go to game start" : `Go to move #${index}`}
          </button>
        ))}
      </div>
    </div>
  );
}
