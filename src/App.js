import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { useSelector } from 'react-redux'

import NewTodoForm from './todos/NewTodoForm'
import TodoList from './todos/TodoList'
import { GlobalStyle } from './GloablStyles'

const App = () => {
  const incompletedTodos = useSelector(state =>
    state.todos.filter(todo => !todo.isCompleted)
  )

  const completedTodos = useSelector(state =>
    state.todos.filter(todo => todo.isCompleted)
  )

  return (
    <Main>
      <GlobalStyle />
      <NewTodoForm />
      <TodoList todos={ incompletedTodos } title="Todos" />
      <TodoList todos={ completedTodos } title="Done" />
    </Main>
  )
}

export default hot(module)(App)

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
  padding-top: 10px;
`