import React, { memo } from 'react'

interface Props{
    todos: string[]
    addTodo: () => void
}

const Todo = memo(({todos,addTodo}:Props) => {
    console.log('child render')
  return (
    <div className='flex flex-col items-center w-52 bg-blue-400'>
      {todos.map((todo,i) => <p className='my-2'>{todo}{i}</p>)}
      <button onClick={addTodo}>Add</button>
    </div>
  )
})

export default Todo

