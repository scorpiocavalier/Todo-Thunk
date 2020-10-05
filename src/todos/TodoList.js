import React from 'react'
import { useDispatch } from 'react-redux'

import TodoListItem from './TodoListItem'
import { removeTodo } from '../redux/actions'

export default ({ todos, title }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <h3>{ title }</h3>
      { todos.map((todo, index) =>
        <TodoListItem
          key={ index }
          todo={ todo }
          onRemoveTodo={ text => dispatch(removeTodo(text)) }
        />
      ) }
    </div>
  )
}