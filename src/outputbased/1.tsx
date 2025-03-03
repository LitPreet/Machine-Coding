import React from "react";
import  { useEffect, useState } from "react";


// function RenderMe(){
//   console.log("heys")
//   return <div>I am rendered</div>
// }
// const RedMemo = React.memo(RenderMe)
// function Appy1() {
//     const [count, setCount] = useState(0);
//   console.log('ki')
//     useEffect(() => {
//       console.log("Effect called");
//       return () => console.log("Cleanup");
//     }, []);
  
//     return (
//       <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <p>{count}</p>
//         <RedMemo />
//       </div>
//     );
//   }
  
//   export default Appy1;
// function App({ value = 10 }) {
//     return <p>{value}</p>;
//   }
  
//   function Appy1() {
//     return <App value={undefined} />;
//   }
  
//   export default Appy1;
  
// function Appy1() {
//   const [count, setCount] = useState(0);
// console.log('render')
//   const handleClick = () => {
//     setCount(count+1);
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Increment</button>
//       <Child count={count} />
//     </div>
//   );
// }

// function Child({ count }:{count:number}) {
//   console.log("Child render");
//   return <p>{count}</p>;
// }

// export default Appy1;

// function Appy1() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//     setTimeout(() => setCount(count + 1), 1000);
//   };
// console.log('u')
//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <p>{count}</p>
//     </div>
//   );
// }

// export default Appy1;

// function Appy1() {
//   const [count, setCount] = useState(0);
//   console.log("tend")
//   const handleClick = () => {
//     setCount(count + 1);
//     setCount((prev) => prev + 1);
//     setCount(count + 1);
//     // setCount((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <p>{count}</p>
//     </div>
//   );
// }
// export default Appy1;

// function Appy1() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if(count){
//         console.log("Effect called");
//     }
        
//     return () => console.log("Cleanup");
//   }, [count]);

// //   When count changes (click button):
// //   1. FIRST: Previous effect's cleanup runs ("Cleanup" logged)
// //   2. THEN: Component re-renders with new count
// //   3. FINALLY: New effect runs ("Effect called" logged if count > 0)

// //   React's Lifecycle:

// // Previous Render → Cleanup Previous Effect → New Render → Run New Effect


// // Initial render (count = 0)
// // - Effect runs (no log because count is 0)

// // Click button (count = 1)
// // 1. Cleanup from count=0 runs: "Cleanup"
// // 2. New effect for count=1 runs: "Effect called"

// // Click button again (count = 2)
// // 1. Cleanup from count=1 runs: "Cleanup"
// // 2. New effect for count=2 runs: "Effect called"

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default Appy1;


// function Child({ value }:{value:string}) {
//   console.log("Child render");
//   return <p>{value}</p>;
// }

// function Appy1() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child value={count % 2 === 0 ? "Even" : "Odd"} />
//     </div>
//   );
// }

// export default Appy1;

// import React, { useState } from "react";

// function Appy1() {
//   const [text, setText] = useState("Hello");

//   return (
//     <div>
//       <button onClick={() => setText("Hello")}>Say Hello</button>
//       <button onClick={() => setText("Hi")}>Say Hi</button>
//       {text === "Hello" ? <p>Hello</p> : <p>Hi</p>}
//     </div>
//   );
// }

// export default Appy1;


import  { createContext, useContext } from "react";

const MyContext = createContext('');

function Parent() {
  return (
    <MyContext.Provider value="React">
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
