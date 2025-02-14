import React, {
  useState,
  useCallback,
  ChangeEvent,
  useEffect,
  useRef,
} from "react";
import InfiniteScrollChild from "./InfiniteScrollChild";

function InfiniteScroll() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState([]);

  const controllerRef = useRef<AbortController | null>(null);

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);


  const renderListItem = useCallback(
    ({ title }: { title: string }, key: string | number, ref: React.RefObject<HTMLDivElement>) => (
        <div key={key} ref={ref}>
            {title}
        </div>
    ),
    []
);

//below code of abortController is for cancel prev call if user typing

  const getData = useCallback((query: string, pageNo: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (controllerRef.current) controllerRef.current.abort();
        controllerRef.current = new AbortController();
        const promise = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: query,
              page: pageNo,
            }),
          { signal: controllerRef.current.signal }
        );
        const data1 = await promise.json();
        setData(data1);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  return (
    <div>
      <input
        className="p-2 outline-none border border-gray-500 w-52"
        type="text"
        value={query}
        onChange={handleInput}
      />
      <InfiniteScrollChild query={query} getData={getData} renderListItem ={renderListItem} listData={data}/>
    </div>
  );
}

export default InfiniteScroll;
