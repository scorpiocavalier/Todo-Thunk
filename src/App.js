import React from 'react'
import { hot } from 'react-hot-loader'
import TodoList from './todos/TodoList'

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default hot(module)(App)