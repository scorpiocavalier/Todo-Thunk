import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createTodo } from '../redux/actions'

export default () => {
  const [ inputValue, setInputValue ] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const addTodo = () => {
    const isDuplicateText = todos.some(todo => todo.text === inputValue)
    if (!isDuplicateText) {
      dispatch(createTodo(inputValue))
      setInputValue('')
    }
  }

  return (
    <div>
      <input
        type="text"
        value={ inputValue }
        onChange={ e => setInputValue(e.target.value) }
        placeholder="Enter a todo"
      />
      <button
        onClick={ addTodo }
      >Create Todo</button>
    </div>
  )
}