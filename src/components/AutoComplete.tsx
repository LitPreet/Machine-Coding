import React, { useCallback, useState } from "react";


// with api 
// Auto-suggesting search box.
// import "./styles.css";
// import React, { useState, useEffect, useRef, useCallback } from "react";

// export default function App() {
//   const [results, setResults] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const fetchResults = async (query) => {
//     if (!query) return;
//     try {
//       console.log("call");
//       const res = await fetch(
//         `https://dummyjson.com/recipes/search?q=${query}`
//       );
//       const data = await res.json();
//       console.log(data, "j");
//       setResults(data.recipes);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const debounce = (cb, del) => {
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         cb(...args);
//       }, del);
//     };
//   };

//   const debouncedQuery = useCallback(debounce(fetchResults, 300), []);

//   useEffect(() => {
//     console.log("run");
//     debouncedQuery(searchText);
//   }, [searchText, debouncedQuery]);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchText(value);
//   };

//   return (
//     <div className="App">
//       <input
//         id="search"
//         type="search"
//         placeholder="Search"
//         value={searchText}
//         onChange={handleChange}
//       />
//       <div id="results">
//         {results.map((result, idx) => (
//           <div
//             key={idx}
//             id="result"
//             onClick={() => setSearchText(result.name)} // FIX: Set name instead of object
//           >
//             {result.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


const AutoComplete = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "The early bird catches the worm.",
    "Actions speak louder than words.",
  ];

const debounce = (cb: (...args: any[]) => void ,del: number) => {
    let timer: number | undefined;
    return function (...args: any){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=> {
            cb(...args);
        },del)
    }
}

  const searchApi = (query: string) => {
    const latency = 200;
    return new Promise<string[]>((resolve, reject) => {
      const res: string[] = [];
      console.log(`Searching`)
      if (!query) {
        resolve(res);
        return;
      }
      for (const sentence of sentences) {
        if (sentence.toLowerCase().includes(query.toLowerCase())) {
          res.push(sentence);
        }
    }
      setTimeout(() => resolve(res), latency);
    });
  };

  const debouncedQuery = useCallback(debounce((query:string) => {
        searchApi(query).then((data) => setResults(data)).catch((err) => console.log(err));
      },500),[])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchText(query);
   debouncedQuery(query)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search results"
        value={searchText}
        onChange={handleChange}
        className="p-2 w-[500px] outline-none border focus:border-blue-300"
      />
      <div className="flex flex-col gap-3 w-full bg-white rounded-md my-2 h-[300px] p-2">
        {results &&
          results.length > 0 &&
          results.map((t: string, i: number) => {
            return (
              <p
                className="bg-orange-200 hover:bg-gray-300 cursor-pointer"
                key={i}
              >
                {t}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default AutoComplete;
