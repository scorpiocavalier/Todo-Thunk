import React, { useEffect } from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { useDispatch } from 'react-redux'

import { GlobalStyle } from './GloablStyles'
import NewTodoForm from './components/todos/NewTodoForm'
import TodoList from './components/todos/TodoList'
import { loadTodos } from './redux/thunks'
import {
  selectCompletedTodos,
  selectIncompleteTodos,
  selectIsLoading
} from './Selectors'

const App = () => {
  const dispatch = useDispatch()

  const isLoading = selectIsLoading()
  const incompletedTodos = selectIncompleteTodos()
  const completedTodos = selectCompletedTodos()

  const loadingMsg = <LoadingMsg>Loading Todos...</LoadingMsg>

  const content =
    <div>
      <TodoList todos={ incompletedTodos } title="Todos" />
      <TodoList todos={ completedTodos } title="Done" />
    </div>

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  return (
    <Main>
      <GlobalStyle />
      <NewTodoForm />
      { isLoading ? loadingMsg : content }
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

const LoadingMsg = styled.div`
  display: flex;
  justify-content: center;
`