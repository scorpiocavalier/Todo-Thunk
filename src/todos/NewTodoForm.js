import React, { useState } from 'react'

export const NewTodoForm = () => {
  const [ inputValue, setInputValue ] = useState('')
  return (
    <div>
      <input
        type="text"
        value={ inputValue }
        onChange={ e => setInputValue(e.target.value) }
        placeholder="Enter a todo"
      />
      <button>Create Todo</button>
    </div>
  )
}

export default NewTodoForm