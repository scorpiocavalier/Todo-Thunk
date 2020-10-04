import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

export const TodoList = ({ todos = [] }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map(todo => <TodoListItem todo={ todo } />) }
    </div>
  )
}

export default TodoList