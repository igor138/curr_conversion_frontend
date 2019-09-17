// import * as types from 'redux/types/convertion'

const initialState = {
  currencies: [],
  sourceCurrency: null,
  destCurrency: null,
  amount: 0,
  convertedAmount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AAA': {
      return {
        ...state
      }
    }  
    default: {
      return state
    }  
  }
}    