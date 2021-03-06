import React, {Component} from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component{
    render(){
// Step 2 : reducer : state & action
const reducer = function(state, action){
    if(action.type === "ATTACK"){
        return action.payload
    }
    if(action.type === "GREENATTACK"){
        return action.payload
    }
    return state;
}

//Step 1: Store : reducer & state
const store = createStore(reducer, "Peace");

//Step 3 : Subscribe
store.subscribe(() =>{
    console.log("Store is now ", store.getState());
});
// Step 4 : Dispatch Action
 store.dispatch({type:"ATTACK", payload: "IRON MAN"});
 store.dispatch({type:"GREENATTACK", payload: "HULK"});

        return(<div>
            Introduction to Redux
        </div>);
    }
}
export default ReduxDemo;