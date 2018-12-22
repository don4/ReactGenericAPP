import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class ReduxIncrementDecrement extends Component{
    increment = () => {
        this.props.dispatch({type : "INCREMENT" });
    }
    decrement = () => {
        this.props.dispatch({type : "DECREMENT" });
    }   
    render(){
        return(<div>
            <h3>Using Redux</h3>
            <button onClick={this.decrement}>-</button>
            &nbsp;&nbsp;
            <span>{this.props.value}</span>
            &nbsp;&nbsp;
            <button onClick={this.increment}>+</button>
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    value: state.value
})
export default connect(mapStateToProps)(ReduxIncrementDecrement);