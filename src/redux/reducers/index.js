import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import conversion from './conversion'
import stats from './stats'

export default combineReducers({
  form,
  conversion,
  stats
})