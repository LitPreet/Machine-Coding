import React, { useState, useMemo } from "react";

const UseMemoExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // useMemo to memoize the expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    return number * 2;
  }, [number]); // Recompute only when `number` changes

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive Calculation (number * 2): {expensiveCalculation}</p>
      
      <button onClick={() => setNumber(number + 1)}>
        Increment Number
      </button>
      <br />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseMemoExample;
