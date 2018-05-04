import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';
import todoItem from './Components/TodoItem';

class App extends Component {
  constructor(){
    super();
this.state ={
  projects:[],
  toDos:[]
  }
}
getProjects(){
  this.setState({projects: [
    {
      id: uuid.v4(),
      title:'Business Website',
      category: 'Web Design'
    },
    {
      id: uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      id: uuid.v4(),
      title: 'Ecommerce Shopping Cart',
      category:'Web Development'
    }
  ]});
}
getToDos(){  
$.ajax({
  url:'https://jsonplaceholder.typicode.com/todos',
  dataType: 'json',
  cache: false,
  success: function(data){
    this.setState({todos: data}, function(){
      console.log(this.state);
    })
  }.bind(this),
  error: function(xhr, data, err){
    console.log(err);
  }
})
}
componentWillMount(){
  this.getProjects();  
  this.getToDos();  
}
componentDidMount(){
  this.getToDos();
}
handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}
handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
}
handleDeleteTodos(id){
  let todos = this.state.todos;
  let index = todos.findIndex(x => id === id);
  todos.splice(index, 1);
  this.setState({todos:todos});
}
  render() {
    return (
      <div className="App">
        My App
        <AddProject addProject ={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <Todos todos ={this.state.todos} onDelete={this.handleDeleteTodos.bind(this)}/>
      </div>
    );
  }
}

export default App;
