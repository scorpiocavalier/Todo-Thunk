import {
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess
} from './actions'

const url = 'http://localhost:8080'

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress())

    const response = await fetch(url + '/todos-delay')
    const todos = await response.json()

    dispatch(loadTodosSuccess(todos))
  } catch (e) {
    console.error('loadTodos thunk error:', e)
    dispatch(loadTodosFailure())
  }
}
