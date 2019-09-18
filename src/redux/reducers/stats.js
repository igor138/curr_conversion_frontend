// import * as types from 'redux/types/conversion'

const initialState = {
  popularDestCurrency: null,
  conversionsCount: 0,
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