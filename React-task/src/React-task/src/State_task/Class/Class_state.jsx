

import React, {SetState, Component } from 'react'
import Img_class_state from './Img_class_state';

export class Class_state extends Component {

    constructor() {
        super();
        this.state = {
            name:"Manoj singh",
            email:"Msingh@gmail.com",
            age:32,
            number:1,
            isImage:true
        }
    }


  render() {
    return (
      <div>
        <h1>Class_state</h1>
        <hr />

        <button onClick={()=>this.setState({name:"Raj Nagar"})}>change</button>
        <h1>{this.state.name} </h1>

        <hr />

        <button onClick={()=>this.setState({email:"Raj@gmail.com", age:34})}>change</button>
        <h1>Hello my Email is: {this.state.email}, and age is:{this.state.age} </h1>

        <hr />

        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <h1>{this.state.number} </h1>
        <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>


        <hr />
        <button onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button onClick={()=>this.setState({isImage:true})}>show</button>
        <button onClick={()=>this.setState({isImage:!this.state.isImage})}>Hide/show</button>
        <h1>{this.state.isImage? <Img_class_state/> :null} </h1>




      </div>
    )
  }
}

export default Class_state