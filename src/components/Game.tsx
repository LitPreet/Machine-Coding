import React, { useState } from "react";

const Game = () => {
  // Valid words and allowed letters
  const validWords = ["APPLE", "BANANA", "ORANGE", "GRAPE", "PEACH"];
  const allowedLetters = /^[A-Z]{1,6}$/; // Regex for 1 to 6 uppercase letters

  // State for input, score, and error message
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase(); // Convert input to uppercase
    if (allowedLetters.test(value) || value === "") {
      setInput(value); // Update input if valid
      setError(""); // Clear error
    } else {
      setError("Only uppercase letters (max 6) are allowed!"); // Set error
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validWords.includes(input)) {
      setScore(score + input.length); // Update score
      setInput(""); // Clear input
      setError(""); // Clear error
    } else {
      setError("Invalid word! Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Word Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a word"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h2>Score: {score}</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Game;
