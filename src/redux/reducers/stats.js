 import * as types from '../types/stats'

const initialState = {
  popularDestCurrency: null,
  conversionsCount: 0,
  totalAmount: 0,
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_STATS_STARTED: {
      return {
        ...state,
        isLoading: true
      }
    }
    case types.FETCHING_STATS_FINISHED: {
      const { popularDestCurrency, conversionsCount, totalAmount} = action.payload
      return {
        ...state,
        isLoading: false,
        popularDestCurrency: popularDestCurrency,
        conversionsCount: conversionsCount,
        totalAmount: totalAmount && totalAmount.toFixed(2)
      }
    }
    case types.STATS_ERROR: {
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