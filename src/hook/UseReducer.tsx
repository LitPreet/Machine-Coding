import React, { useReducer } from 'react'
const initialState: number = 0;

const reducer = (state: number, action: {type:string}) => {
    switch (action.type) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
    }
    return state;
}


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <p>Count is : {state}</p>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    </div>
  )
}

export default UseReducer
