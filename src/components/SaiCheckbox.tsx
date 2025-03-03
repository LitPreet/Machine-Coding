import React, { useState } from "react";
interface Box {
    boxA:string[],
    boxB:string[],
}
const SaiCheckbox = () => {
  const checkBoxData = ["Ayush", "Himanshu", "Sai", "Mayank", "Smith"];
  const [data, setData] = useState<Box>({
    boxA: [...checkBoxData],
    boxB: [],
  });
  const [boxA, setBoxA] = useState<string[]>([]);
  const [boxB, setBoxB] = useState<string[]>([]);

  const handleBoxA = (e: React.ChangeEvent<HTMLInputElement>, item: string) => {
    console.log(e.target.checked,'a')
      setBoxA((prev) => e.target.checked ? [...prev, item] :prev.filter((it) => it !== item));
  };

console.log(boxA,'aaa')
  const handleBoxB = (e: any, item: string) => {
    setBoxB((prev) => e.target.checked ? [...prev, item] :prev.filter((it) => it !== item));
  };
const handleSwapRight = () => {
setData((prev) => ({
    boxA: prev.boxA.filter((it) => !boxA.includes(it)),
    boxB: [...prev.boxB, ...boxA]
}))
setBoxA([]);
}
const handleSwapLeft = () => {
    setData((prev) => ({
        boxA: [...prev.boxA, ...boxB],
        boxB: prev.boxA.filter((it) => !boxA.includes(it))
    }))
    setBoxB([]);
}
  return (
    <div className="flex gap-6">
      <div className="border border-gray-400 min-w-[200px] p-2 flex flex-col">
        {data.boxA.map((item) => (
          <div className="flex gap-2">
            <label>{item}</label>
            <input type="checkbox"  checked={boxA.includes(item)} onChange={(e) => handleBoxA(e, item)} />
          </div>
        ))}
      </div>
      <button disabled={boxB.length === 0} onClick={handleSwapLeft}>👈</button>
      <button disabled={boxA.length === 0} onClick={handleSwapRight}>👉</button>
      <div className="border border-gray-400 min-w-[200px] p-2 flex flex-col">
        {data.boxB.map((item) => (
          <div className="flex gap-2">
            <label>{item}</label>
            <input type="checkbox"  checked={boxB.includes(item)} onChange={(e) => handleBoxB(e, item)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaiCheckbox;
