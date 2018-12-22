import React, { Component } from 'react';
import './App.css';

class IncrementDecrement extends Component{
constructor(props){
    super(props);
    this.state = {
        value: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
}
increment(){
    this.setState({
        value: this.state.value + 1
    });
}
decrement(){
    this.setState({
        value: this.state.value > 0 ? this.state.value - 1 : 0
    });
}
    render(){
        return(<div>
            <h3>Using React state</h3>
            <button onClick={this.decrement}>-</button>
            &nbsp;&nbsp;
            <span>{this.state.value}</span>
            &nbsp;&nbsp;
            <button onClick={this.increment}>+</button>
        </div>
        )
    }
}
export default IncrementDecrement;