import React from 'react'

export const TodoListItem = ({ todo }) => {
  return (
    <div>
      <h3>{ todo.text }</h3>
      <div>
        <button>Mark as Completed</button>
        <button>Remove</button>
      </div>
    </div>
  )
}

export default TodoListItem