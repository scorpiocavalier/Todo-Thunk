import React from 'react'
import { hot } from 'react-hot-loader'
import { useSelector } from 'react-redux'

import NewTodoForm from './todos/NewTodoForm'
import TodoList from './todos/TodoList'

const App = () => {
  const incompletedTodos = useSelector(state =>
    state.todos.filter(todo => !todo.isCompleted)
  )

  const completedTodos = useSelector(state =>
    state.todos.filter(todo => todo.isCompleted)
  )

  return (
    <div>
      <NewTodoForm />
      <TodoList todos={ incompletedTodos } title="Todos" />
      <TodoList todos={ completedTodos } title="Done" />
    </div>
  )
}

export default hot(module)(App)