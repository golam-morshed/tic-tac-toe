import React from "react";

export default function Square({ value, index, method }) {
  return (
    <button
      className="border-1 border-gray-200 w-[50px] h-[50px] bg-white font-medium text-2xl"
      onClick={() => method(index)}
    >
      {value}
    </button>
  );
}
