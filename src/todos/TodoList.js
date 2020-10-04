import React from 'react'
import { connect } from 'react-redux'

import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { removeTodo } from '../redux/actions'

export const TodoList = ({ todos = [], onRemoveTodo }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo, index) =>
        <TodoListItem
          key={ index }
          todo={ todo }
          onRemoveTodo={ onRemoveTodo }
        />
      ) }
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (text) => dispatch(removeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)