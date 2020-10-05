import React, { useState } from 'react'
import styled from 'styled-components'
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
    <Form>
      <Input
        type="text"
        value={ inputValue }
        onChange={ e => setInputValue(e.target.value) }
        placeholder="Enter a todo"
      />
      <button className="create-todo" onClick={ addTodo }>Create Todo</button>
    </Form>
  )
}

const Form = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Input = styled.input`
  width: 50%;
`