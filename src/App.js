import React from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import Convertion from './redux/containers/Convertion'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Convertion/>
        </header>
      </div>
    </Provider>  
  );
}

export default App;
