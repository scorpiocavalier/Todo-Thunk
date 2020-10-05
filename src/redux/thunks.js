import {
  createTodo,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
  removeTodo
} from './actions'

const url = 'http://localhost:8080'

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress())
    const response = await fetch(url + '/todos')
    const todos = await response.json()
    dispatch(loadTodosSuccess(todos))
  } catch (e) {
    console.error('loadTodos thunk error:', e)
    dispatch(loadTodosFailure())
  }
}

export const addTodoRequest = (text) => async dispatch => {
  try {
    const options = {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({ text })
    }
    const response = await fetch(url + '/todos', options)
    const todo = await response.json()
    dispatch(createTodo(todo))
  } catch (e) {
    console.error('addTodoRequest thunk error:', e)
  }
}

export const removeTodoRequest = (id) => async dispatch => {
  try {
    const options = { method: 'delete' }
    const response = await fetch(url + `/todos/${ id }`, options)
    const todoToRemove = await response.json()
    dispatch(removeTodo(todoToRemove))
  } catch (e) {
    console.error('removeTodoRequest thunk error:', e)
  }
}
