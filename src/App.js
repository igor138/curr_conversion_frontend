import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Conversion from './containers/Conversion'
import Stats from './containers/Stats'

const App = () => <Provider store={store}>
  <div className="App">
    <header className="App-header">
      <Conversion/>
      <Stats/>
    </header>
  </div>
</Provider>  

export default App
