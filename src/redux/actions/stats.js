import * as Api from '../../services/httpApi'
import * as types from '../types/stats'

const errorAction = e => ({
  type: types.STATS_ERROR,
  payload: e.toString()
})

export const update = () => (dispatch => {
  dispatch({ type: types.FETCHING_STATS_STARTED })
  Api.getStats(response => {
    dispatch({
      type: types.FETCHING_STATS_FINISHED,
      payload: response
    })
  }, error => dispatch(errorAction(error)))
})
