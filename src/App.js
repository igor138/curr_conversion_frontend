import React from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import Conversion from './redux/containers/Conversion'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Conversion/>
        </header>
      </div>
    </Provider>  
  );
}

export default App;
