import * as types from '../types/conversion'

const initialState = {
  currencies: {},
  convertedAmount: 0,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_CURRENCIES_STARTED: {
      return {
        ...state,
        isLoading: true
      }
    }
    case types.FETCHING_CURRENCIES_FINISHED: {
      return {
        ...state,
        isLoading: false,
        currencies: action.payload
      }
    }
    case types.CONVERSION_FINISHED: {
      return {
        ...state,
        isLoading: false,
        convertedAmount: action.payload.response
      }
    } 
    default: {
      return state
    }  
  }
}    