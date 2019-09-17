import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers'

const { __REDUX_DEVTOOLS_EXTENSION__ = _=>_ } = window
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default createStoreWithMiddleware(reducer, __REDUX_DEVTOOLS_EXTENSION__())
