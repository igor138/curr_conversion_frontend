// import * as types from 'redux/types/conversion'

const initialState = {
  currencies: {},
  sourceCurrency: null,
  destCurrency: null,
  amount: 0,
  convertedAmount: 0,
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_CURRENCIES_STARTED': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'FETCHING_CURRENCIES_FINISHED': {
      return {
        ...state,
        isLoading: false,
        currencies: action.payload
      }
    }
    case 'CONVERSION_FINISHED': {
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