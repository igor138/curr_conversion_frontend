const { __APP_CONFIG__: { apiUrl } } = window

const httpGet = (url, callback) => (
  fetch(apiUrl + url)
    .then(response => response.json())
    .then(callback)
)

const httpPost = (url, data, callback) => (
  fetch(apiUrl + url, { 
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(callback)
)  

export const getStats = callback => {
  httpGet('/conversion', callback)
}

export const getCurrencies = callback => {
  httpGet('/currency', callback)
}

export const convert = (data, callback) => {
  httpPost('/conversion', data, callback)
} 