import React from 'react'
import styled from 'styled-components'

import TodoListItem from './TodoListItem'

export default ({ todos, title }) => {
  return (
    <TodoList>
      <h2>{ title }</h2>
      { todos.map((todo, index) =>
        <TodoListItem key={ index } todo={ todo } />
      ) }
    </TodoList>
  )
}

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  width: 100%;
`