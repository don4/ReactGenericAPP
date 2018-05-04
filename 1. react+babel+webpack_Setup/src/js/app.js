import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css'; // Import CSS

import ReduxDemo from './ReduxDemo';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react       
      <hr/>
      <ReduxDemo />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));