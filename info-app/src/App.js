import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import Parent from './components/Parent';

import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [],
      currTask:""
    }
  }


  handleChange = (e) =>{

      // console.log(e.target.value);
      this.setState({
        currTask:e.target.value,
        
      })
      
    }
    
handleAddTask = () =>{
  this.setState({
    tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length}],
    currTask:""
  })
}


handleDelete = (id) =>{
  let narr = this.state.tasks.filter((taskObj)=>{
    return taskObj.id != id;
  })

  this.setState({
    tasks:[...narr]
  })
}


  render() {
    return (
      <>
        <input type="text" value = {this.state.currTask} onChange={this.handleChange} />
        <button onClick={this.handleAddTask}>Add Task</button>
      
        <ul>
          
            {this.state.tasks.map((taskObj)=>(
                
                <>
                  <li key = {taskObj.id}>
                    <p>{taskObj.task}</p>
                    </li>
                <button onClick={() =>this.handleDelete(taskObj.id)}>delete</button>
                </>
                
            ))}
          
        </ul>
      
      </>

    )
  }
}


export default App;
