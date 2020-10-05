import React, { useEffect } from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { useDispatch, useSelector } from 'react-redux'

import { GlobalStyle } from './GloablStyles'
import NewTodoForm from './todos/NewTodoForm'
import TodoList from './todos/TodoList'
import { loadTodos } from './redux/thunks'

const App = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(state => state.isLoading)

  const incompletedTodos = useSelector(state =>
    state.todos.filter(todo => !todo.isCompleted)
  )

  const completedTodos = useSelector(state =>
    state.todos.filter(todo => todo.isCompleted)
  )

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