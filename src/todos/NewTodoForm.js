import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { createTodo } from '../redux/actions'

export default () => {
  const [ inputValue, setInputValue ] = useState('')
  const [ message, setMessage ] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      const todoExists = todos.some(todo => todo.text === inputValue)
      if (!todoExists) {
        setMessage('')
        dispatch(createTodo(inputValue))
      } else {
        setMessage('Todo already exists.')
      }
      setInputValue('')
    }
  }

  return (
    <Form>
      <Input
        type="text"
        value={ inputValue }
        onChange={ e => setInputValue(e.target.value) }
        onKeyPress={ e => addTodo(e) }
        placeholder="Enter a todo"
      />
      <Message>{ message }</Message>
    </Form>
  )
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  line-height: 2rem;
  font-size: 1.2rem;
  padding-left: 10px;
`

const Message = styled.div`
  margin: 10px 0;
  color: darkred;
`