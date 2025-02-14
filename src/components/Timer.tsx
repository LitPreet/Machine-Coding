import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [running, setRunning] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const timerRef = useRef<number | undefined>();

  useEffect(() => {
    if(running){
        timerRef.current = setTimeout(() => {
          setCount((prev) => prev + 1);
        }, 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [count, running]);


  //By using setInterval
  
  //   const handleTimer = () => {
  //     setRunning((prev) => !prev);
  //       if (running) {
  //           clearInterval(timerRef.current);
  //         } else {
  //             timerRef.current = setInterval(() => {
  //                 setCount((prev) => prev + 1);
  //             }, 1000);
  //         }
  //   };

  console.log(timerRef.current);
  //   If you don't use a reference (timerRef) to store the setInterval ID and simply call handleTimer on click to start the interval, the code might not work as expected for several reasons:
  //   Key Issues:
  //   Multiple Intervals: Without a reference to store and clear the interval ID, every time you click the button to start the timer, a new interval is created. This can lead to multiple intervals running simultaneously, all incrementing the count, which results in the count increasing much faster than intended.
  return (
    <div>
      <p>Count is : {count}</p>
      {/* <button onClick={handleTimer}>{running ? "Stop" : "start"}</button> */}
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "start"}
      </button>
    </div>
  );
};

export default Timer;
