import React, { useState } from "react";

const TicketApp = () => {
  const [selectedSeat, setSelectedSeat] = useState<number[]>([]);
  const [bookedSeat, setBookedSeat] = useState<number[]>([]);
  const totalSeat = 10;
  const handleToggleSeatSelection = (i: number) => {
    if (bookedSeat.includes(i)) return;

    setSelectedSeat((prev) => {
      return prev.includes(i) ? prev.filter((s) => s !== i) : [...prev, i];
    });
  };

  const handleBook = () => {
    if (selectedSeat.length === 0) return;
    setBookedSeat([...bookedSeat, ...selectedSeat]);
    setSelectedSeat([]);
  };
  const handleclear = () => {
    setBookedSeat([]);
  };

  const handleReset = () => {
    setSelectedSeat([]);
    setBookedSeat([]);
  };
  return (
    <div
      className={`flex flex-wrap flex-col gap-2 w-[200px] justify-center bg-red-300`}
    >
      <div className="flex flex-wrap gap-3">
        {[...Array(totalSeat)].map((_, i: number) => {
          return (
            <button
              key={i + 1}
              onClick={() => handleToggleSeatSelection(i + 1)}
              className={`${
                bookedSeat.includes(i + 1)
                  ? "bg-gray-300"
                  : selectedSeat.includes(i + 1)
                  ? "bg-green-300"
                  : "bg-red-500"
              } border border-gray-300 w-10 h-10`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <button
        className="bg-blue-300 w-fit mx-auto p-2"
        disabled={selectedSeat.length === 0}
        onClick={handleBook}
      >
        Book
      </button>
      <button className="bg-blue-300 w-fit mx-auto p-2" onClick={handleclear}>
        Clear
      </button>
      <button className="bg-blue-300 w-fit mx-auto p-2" onClick={handleReset}>
        Reset All
      </button>
    </div>
  );
};

export default TicketApp;

// https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2011&page=2
