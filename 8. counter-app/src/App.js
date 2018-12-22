import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IncrementDecrement from './ReactStateIncrementDecrement';
import ReduxIncrementDecrement from './ReduxIncrementDecrement';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState ={
  value: 0
}
function reducer(state = initialState, action){
  switch(action.type){
    case "INCREMENT":
      return{
        value: state.value + 1
      }
      case "DECREMENT":
      return{
        value: state.value > 0 ? state.value - 1 : 0
      }
      default :
        return state;
  }
}
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <h1>
            Basics of React-Redux
          </h1>
          <IncrementDecrement/>
          <ReduxIncrementDecrement/>
        </div>
      </Provider>
    );
  }
}

export default App;
