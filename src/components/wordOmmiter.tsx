import React, { useState } from "react";

const WordOmmiter = () => {
  const [ommitWords, setOmmitWords] = useState<boolean>(false);
  const [input, setInputData] = useState<string>("");
  const handleToggleOmmitWords = () => {
    setOmmitWords(!ommitWords);
  };

  const handleClear = () => {
    setInputData("");
  };
  const OMMIT_WORDS = ["a", "the", "an", "you", "and"];
  const getProcessOutput = () => {
    if (input.trim() !== "") {
      const ommitedWords = input
        .split(" ")
        .filter((word) => OMMIT_WORDS.includes(word))
        .join(" ");
      const remainingWords = input
        .split(" ")
        .filter((word) => !OMMIT_WORDS.includes(word))
        .join(" ");
      return ommitWords ? ommitedWords : remainingWords;
    }
  };

  return (
    <div>
      <input
        type="text"
        className="my-4 p-2 focus:outline-none"
        value={input}
        onChange={(e) => setInputData(e.target.value)}
      />
      <div className="flex gap-4">
        <button
          onClick={handleToggleOmmitWords}
          className="bg-green-600 text-white p-2 border-none flex items-center justify-center"
        >
          {ommitWords ? "Show All Words" : "Ommit Words"}
        </button>
        <button
          className="bg-green-600 text-white p-2 border-none flex items-center justify-center"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <h2 className="font-bold text-2xl my-2">Output:</h2>
      <div className="">{getProcessOutput()}</div>
    </div>
  );
};

export default WordOmmiter;
