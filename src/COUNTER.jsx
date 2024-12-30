import React, { Component } from 'react'

class COUNTER extends Component {
    constructor(props){
        super(props)
        this.state ={
            count :0
        }
    }
    incerment(){
        this.setState({count:this.state.count+1})
    }
    decrement (){
      this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.incerment()}>+</button>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>this.decrement()}>-</button>
      </div>
    )
  }
}

export default COUNTER
