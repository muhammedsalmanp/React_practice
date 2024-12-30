import React, { Component } from "react";

class MyClss extends Component {
    constructor(){
        super()
        this.state ={
          message  :'hi, What is you name?'
        }
    }
    changeMessage(){
        this.setState({
            message : 'hi sir/mam welcome'
        })
    }
    render() {
        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>clik now</button>
            
            </>
        )
    }
}

export default MyClss;