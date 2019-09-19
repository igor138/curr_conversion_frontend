import * as Api from '../../services/httpApi'
import * as types from '../types/conversion'
import { update as updateStats } from './stats'

export const fetchCurrencies = () => (dispatch => {
  dispatch({ type: types.FETCHING_CURRENCIES_STARTED })
  Api.getCurrencies(jsonCurrencies => {
    dispatch({
      type: types.FETCHING_CURRENCIES_FINISHED,
      payload: jsonCurrencies
    })
  })
})

export const convert = data => (dispatch => {
  dispatch({type: types.CONVERSION_STARTED})
  Api.convert(data, jsonResponse => {
    dispatch({
      type: types.CONVERSION_FINISHED,
      payload: jsonResponse
    })
    dispatch(updateStats()) 
  })
})