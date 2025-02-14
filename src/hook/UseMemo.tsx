import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [show, setShow] = useState(false);
  const [myNum, setMyNum] = useState(0);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNum = (num: number) => {
    console.log("im here memo.jsx", num);
    for (let i = 0; i <= 100000000; i++) { }
    return num;
  };

  const checkData = useMemo(() => {
    return countNum(myNum)
  },[myNum]);

  return (
    <div>
      <button onClick={getValue} className="bg-blue-400 p-2">Counter</button>
      <p>My new Number is: {checkData}</p>
      <button onClick={() => setShow(!show)} className="bg-yellow-600 p-2">
        {show ? "you clicked me" : "click me plz"}
      </button>
    </div>
  );
};

export default UseMemo;
