import React from 'react'

export default ({ todo, onRemoveTodo }) => {
  return (
    <div>
      <h3>{ todo.text }</h3>
      <div>
        <button>Mark as Completed</button>
        <button onClick={() => onRemoveTodo(todo.text)}>Remove</button>
      </div>
    </div>
  )
}