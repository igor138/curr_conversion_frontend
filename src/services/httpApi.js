const { __APP_CONFIG__: { apiUrl } } = window

const httpRequest = (method = 'get', url, callback, errorCallback, data) => {
  let options = { method }
  if (method === 'post') {
    options.body = JSON.stringify(data)
    options.headers = { 'Content-Type': 'application/json' }
  }

  return fetch(apiUrl + url, options)
    .then(response => response.json())
    .then(callback)
    .catch(errorCallback)
}

export const getStats = (callback, errorCallback) => {
  httpRequest('get', '/conversion', callback, errorCallback)
}

export const getCurrencies = (callback, errorCallback) => {
  httpRequest('get', '/currency', callback, errorCallback)
}

export const convert = (callback, errorCallback, data) => {
  httpRequest('post', '/conversion', callback, errorCallback, data)
} 