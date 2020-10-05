import {
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS
} from '../actions'

export default (state = false, action) => {
  const { type } = action
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:  return true

    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:      return false

    default:                      return state
  }
}