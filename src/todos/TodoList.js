import React from 'react'
import TodoListItem from './TodoListItem'

export const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map(todo => <TodoListItem todo={ todo } />) }
    </div>
  )
}

export default TodoList