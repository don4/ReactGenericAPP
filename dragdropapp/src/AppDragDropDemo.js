import React, { Component } from 'react';
import './App.css';

export default class AppDragDropDemo extends Component {
  state ={
    tasks : [
      {name:"Angular", category:"wip", bgcolor:"yellow"},
      {name:"React", category:"wip", bgcolor:"pink"},
      {name:"Vue", category:"complete", bgcolor:"skyblue"}
    ]
  }
  onDragOver =(evt) =>{
    evt.preventDefault();
  }

  onDragStart = (evt, id) =>{
    console.log("dragstart :" + id);
    evt.dataTransfer.setData("id", id);
  }

  onDrop = (evt, cat) => {
    let id = evt.dataTransfer.getData("id");
    let tasks = this.state.tasks.filter((task)=>{
      if(task.name === id){
        task.category = cat;
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks
    });
  }
  render() {
    var tasks= {
      wip:[],
      complete:[]
    }
    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name}
        onDragStart = {(e) => this.onDragStart(e, t.name)}
        draggable
        className="draggable"
        style={{backgroundColor: t.bgcolor}}>
        {t.name}
        </div>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drag and Drop Demo</h1>
        </header>
          <div className="wip"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>{this.onDrop(e, "wip")}}
          >
          <h2 className="App-title">WiP</h2>
          {tasks.wip}
          </div>
          <div className="droppable"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>{this.onDrop(e, "complete")}}
          >
          <h2 className="App-title">Completed</h2>
          {tasks.complete}
          </div>
      </div>
    );
  }
}
