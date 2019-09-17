// import * as types from 'redux/types/convertion'

const initialState = {
  popularDestCurrency: null,
  convertionsCount: 0,
  totalAmount: 0
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