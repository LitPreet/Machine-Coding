import React, { useCallback, useState } from "react";
import Todo from "../sub-components/Todo";

const UseCallback = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  // const addTodo = () => {
  //   const newEntry = "new one"
  //   setTodos((prev) => ([...prev, `${newEntry}`]))
  // }

  //when count changes then it re render component and it leads to re rendering of TODOS also
  // to prevent this rendering

  const addTodo = useCallback(() => {
    // const newEntry = "new one";
    setTodos((prev) => [...prev, `new one`]);
  }, [todos]);

  return (
    <div>
      <Todo todos={todos} addTodo={addTodo} />
      <p className="my-3">count :{count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="p-2 bg-green-400 text-center"
      >
        Add count
      </button>
    </div>
  );
};

export default UseCallback;
