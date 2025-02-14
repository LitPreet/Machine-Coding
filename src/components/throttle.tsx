import React, { useState, useEffect, useCallback } from "react";

interface Box {
  id: number;
}

const ThrottleResizeExample: React.FC = () => {
  const [boxCount, setBoxCount] = useState<number>(0);
  const [boxes, setBoxes] = useState<Box[]>([]);

  // Function to add boxes
  const addBoxes = (count: number) => {
    const newBoxes = Array.from({ length: count }, (_, index) => ({
      id: index,
    }));
    setBoxes(newBoxes);
  };

  // Throttle function
  function throttle(cb: (...args: any[]) => void, delay: number) {
    let lastExec = 0;
    return (...args: any[]) => {
      const now = Date.now();
      if (now - lastExec >= delay) {
        lastExec = now;
        cb(...args);
      }
    };
  }

  // Throttled version of addBoxes for resize events
  const throttledAddBoxes = useCallback(throttle(addBoxes, 500), []);

  // Listen for window resize events
  useEffect(() => {
    const handleResize = () => throttledAddBoxes(boxCount);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [boxCount, throttledAddBoxes]);

  // Handle input change to update box count
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value, 10) || 0;
    setBoxCount(count);
    addBoxes(count); // Add boxes immediately on input change
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number of boxes"
        value={boxCount}
        onChange={handleInputChange}
      />
      <div
        className="box-container"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        {boxes.map((box) => (
          <div
            key={box.id}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "lightblue",
              border: "1px solid blue",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThrottleResizeExample;
