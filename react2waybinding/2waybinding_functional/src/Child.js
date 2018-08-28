import React, { Component } from 'react';

export class Child extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.props1 ={
      name:'Praveen',
      age:30
    }
   this.props.changeValue(this.props1.name, this.props1.age);
  }

  render() {
    return (
      <div className="App">
      <h3>another file child component</h3>
      {this.props1.name}
      {this.props1.age}

        </div>
    );
  }
}
