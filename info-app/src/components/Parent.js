import React, { Component } from 'react'
import Child from './Child';



 class Parent extends Component {

    constructor(){
        super();
        this.state = {
            message:`this is a parent component child component communication`
        }
    
    this.greetParent = this.greetParent.bind(this);
    }

    greetParent(){
        alert(`this is parent ${this.state.message}`);
    }


  render() {
    return (
      <Child greetHandler = {this.greetParent}/>
    )
  }
}

export default Parent;


