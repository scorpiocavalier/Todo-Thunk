import React from 'react'
import { useDispatch } from 'react-redux'

import TodoListItem from './TodoListItem'
import { removeTodo } from '../redux/actions'

export default ({ todos = [] }) => {
  const dispatch = useDispatch()

  return (
    <div>
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