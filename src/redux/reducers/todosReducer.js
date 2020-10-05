import {
  CREATE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  MARK_TODO_AS_COMPLETED,
  REMOVE_TODO
} from '../actions'

export default (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_TODO:
      return state.concat(payload.todo)
    case REMOVE_TODO:
      return state.filter(todo => todo.text !== payload.text)
    case MARK_TODO_AS_COMPLETED:
      return state.map(todo => {
        return todo.text === payload.text
          ? { text: payload.text, isCompleted: true }
          : todo
      })
    case LOAD_TODOS_SUCCESS:
      const { todos } = payload
      return todos

    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_IN_PROGRESS:
    default:
      return state
  }
}