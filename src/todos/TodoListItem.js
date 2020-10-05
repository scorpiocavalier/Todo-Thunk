import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { markTodoAsCompleted, removeTodo } from '../redux/actions'

export default ({ todo }) => {
  const { text, isCompleted } = todo
  const dispatch = useDispatch()

  const onCompleteTodo = () => dispatch(markTodoAsCompleted(text))
  const onRemoveTodo = () => dispatch(removeTodo(text))

  const completeBtn =
    <button className="mark-as-completed" onClick={ onCompleteTodo }>
      Mark as Completed
    </button>

  return (
    <Todo isCompleted={ isCompleted }>
      <h3>{ text }</h3>
      <Actions>
        { !isCompleted && completeBtn }
        <button className="remove" onClick={ onRemoveTodo }>Remove</button>
      </Actions>
    </Todo>
  )
}

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  border: ${ p =>
    p.isCompleted
      ? "1px solid green"
      : "1px solid slateBlue"
  };
  border-top: ${ p =>
    p.isCompleted
      ? "15px solid green"
      : "15px solid slateblue"
  };
`

const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
`