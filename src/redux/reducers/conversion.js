import * as types from '../types/conversion'

const initialState = {
  currencies: {},
  convertedAmount: 0,
  isLoading: false,
  error: null
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

    case types.CONVERSION_STARTED: {
      return {
        ...state,
        isLoading: true
      }
    } 
    
    case types.CONVERSION_FINISHED: {
      const { response } = action.payload
      return {
        ...state,
        isLoading: false,
        convertedAmount: response && response.toFixed(2)
      }
    }

    case types.CONVERSION_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    } 
    default: {
      return state
    }  
  }
}    