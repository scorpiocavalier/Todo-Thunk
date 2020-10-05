import {
  createTodo,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess
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
