import { CREATE_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO } from '../actions'

export default (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_TODO:
      return state.concat({ text: payload.text, isCompleted: false })
    case REMOVE_TODO:
      return state.filter(todo => todo.text !== payload.text)
    case MARK_TODO_AS_COMPLETED:
      return state.map(todo => {
        return todo.text === payload.text
          ? { text: payload.text, isCompleted: true }
          : todo
      })
    default:
      return state
  }
}