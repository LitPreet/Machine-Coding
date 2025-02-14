import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [data, setMyData] = useState<string>("");
const count = useRef(0);
  const inputElem = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
   count.current = count.current + 1
  })
// useEffect(() => {
// console.log('render')
// },[])

  //ref will not re render
  //it is used to access the dom directly
  // it return a object with current key

  const handleChange = () => {
    if (inputElem.current) {
    console.log('cliked',inputElem)
    inputElem.current.style.backgroundColor = "#82E0AA";
    inputElem.current.focus()
  };
}

const handleInputChange = () => {
  if(inputElem.current){
    console.log('value',inputElem.current.value)
  }
}
console.log('render')
  return (
    <div>
      {/* <input type="text" ref={inputElem} onChange={(e) => setMyData(e.target.value)} /> */}
      <input type="text" ref={inputElem} onChange={handleInputChange} />
      <button onClick={handleChange}>Submit</button>
      <p>the count : {count.current}</p>
    </div>
  );
}

export default UseRef
