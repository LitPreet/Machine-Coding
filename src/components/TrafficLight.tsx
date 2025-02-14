import React, { useEffect, useState } from "react";
import "../index.css";
function TrafficLight() {
  const [activeLight, setActiveLight] = useState("green");
  const lightData = [
    {
      name: "red",
      bgColor: "red",
      wait: 4000,
      next: "green",
    },
    {
      name: "green",
      bgColor: "green",
      wait: 3000,
      next: "yellow",
    },
    {
      name: "yellow",
      bgColor: "yellow",
      wait: 500,
      next: "red",
    },
  ];
  const lights = lightData.find((light) => light.name === activeLight);
  console.log(lights);

  useEffect(() => {
    if (!lights) return;
    const timer = setTimeout(() => {
      setActiveLight(lights?.next);
    }, lights?.wait);
    return () => clearTimeout(timer);
  }, [lights, activeLight]);

  return (
    <div>
      <h1>Traffic Lights</h1>
      <div className="flex flex-col items-center bg-black p-2">
        {lightData.map((e, i) => {
          return (
            <div
              key={i}
              className={`w-10 h-10 ${
                activeLight === e.bgColor ? e.bgColor : "gray"
              } rounded-full`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default TrafficLight;
