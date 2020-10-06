import { useSelector } from 'react-redux'

export const selectTodos = () => {
  return useSelector(state =>
    state.todos
  )
}

export const selectIsLoading = () => {
  return useSelector(state =>
    state.isLoading
  )
}

export const selectIncompleteTodos = () => {
  return useSelector(state =>
    state.todos.filter(todo =>
      !todo.isCompleted
    )
  )
}

export const selectCompletedTodos = () => {
  return useSelector(state =>
    state.todos.filter(todo =>
      todo.isCompleted
    )
  )
}
