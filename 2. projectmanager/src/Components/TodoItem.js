import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem  extends Component {
  deletetodo(id){
     this.props.onDelete(id);
  }
  render() {
      return (
      <li className="todo">
       <strong>{this.props.todo.title}</strong> <a href="#" onClick={this.deletetodo.bind(this, this.props.todo.id)}>X</a>
      </li>
    );
  }
}
TodoItem.propTypes= {
  todo: PropTypes.object,
  onDelete: PropTypes.func
}

export default TodoItem;
