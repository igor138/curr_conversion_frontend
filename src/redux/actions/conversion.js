export const fetchCurrencies = () => (dispatch => {
  dispatch({ type: 'FETCHING_CURRENCIES_STARTED' })
  fetch('http://localhost:3300/currency')
    .then(response => response.json())
    .then(jsonCurrencies => {
      dispatch({
        type: 'FETCHING_CURRENCIES_FINISHED',
        payload: jsonCurrencies
      })
    })
})

export const convert = data => (dispatch => {
  dispatch({type: 'CONVERSION_STARTED'})
  fetch('http://localhost:3300/conversion', { 
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({
        type: 'CONVERSION_FINISHED',
        payload: jsonResponse
      })
    })
})