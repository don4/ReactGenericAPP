import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <h3>Parent Component state value : </h3>
        <p>{this.state.name}</p>
        {/* <InputChildComponent name={this.state.name} handleChange={this.handleChange}>
        <OtherChildComponent inputVal={this.state.name}/>
        </InputChildComponent> */}
        <InputChildComponent name={this.state.name} handleChange={this.handleChange}/>
        <OtherChildComponent inputVal={this.state.name}/>
        </div>
      </div>
    );
  }
}
const InputChildComponent = (props) => {
  return (
    <div>
      <h3>Input Child Component</h3>
    <input placeholder="Type Here" type="text" value={props.name} onChange={props.handleChange} />
    {/* {props.children} */}
    </div>
  );
}
const OtherChildComponent = (props) => {
  return (
    <div>
      <h3>Other Child Component props value</h3>
      <p>{props.inputVal}</p>
      </div>
  );
}
export default App;
