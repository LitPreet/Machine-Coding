import { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // Elapsed time in milliseconds
  const timeRef = useRef<any | null>(null); // Use ref to store timeout ID
console.log("i render too")
  useEffect(() => {
    if (running) {
      // Start a timer when running
      timeRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 100); // Increment by 100 ms
      }, 100); // Update every 100 ms
    } else if (timeRef.current) {
      // Clear the timer if not running
      clearInterval(timeRef.current);
    }
    
    // Cleanup on component unmount or when running state changes
    return () => {
      clearInterval(timeRef.current!);
    };
  }, [running]);

  const handleReset = () => {
    setRunning(false);
    setElapsedTime(0); // Reset the elapsed time
  };

  const handleStartStop = () => {
    setRunning((prev) => !prev); 
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000); // Calculate hours
    const minutes = Math.floor((time % 3600000) / 60000); // Calculate minutes
    const seconds = Math.floor((time % 60000) / 1000); // Calculate seconds
    const milliseconds = Math.floor((time % 1000) / 100); // Calculate tenths of a second

    // Return formatted time string
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${milliseconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(elapsedTime)}</p>
      <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
