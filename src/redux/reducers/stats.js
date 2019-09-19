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
      return {
        ...state,
        isLoading: false,
        popularDestCurrency: action.payload.popularDestCurrency,
        conversionsCount: action.payload.conversionsCount,
        totalAmount: action.payload.totalAmount
      }
    }
    
    default: {
      return state
    }  
  }
}    