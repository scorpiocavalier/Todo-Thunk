import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createTodo } from '../redux/actions'

export const NewTodoForm = ({ todos, onCreateTodo }) => {
  const [ inputValue, setInputValue ] = useState('')
  return (
    <div>
      <input
        type="text"
        value={ inputValue }
        onChange={ e => setInputValue(e.target.value) }
        placeholder="Enter a todo"
      />
      <button
        onClick={ () => {
          const isDuplicateText =
            todos.some(todo => todo.text === inputValue)
          if (!isDuplicateText) {
            onCreateTodo(inputValue)
            setInputValue('')
          }
        } }
      >Create Todo</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  onCreateTodo: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)