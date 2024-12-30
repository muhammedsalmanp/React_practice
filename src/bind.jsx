// import React from 'react'

//  function bind() {
//   return (
//     <div>
//       <h1>{}</h1>
//     </div>
//   )
// }
// export default bind ;

import React, { Component } from 'react'

 class bind extends Component {
    constructor (props){
        super(props)
        this.state ={
            message : "Hello"
        }
    }
    click (){
        this.setState({
            message: 'good bi'
        })
    }
  render() {
    return (
      <div>
        <h1>hi</h1>
        <div>{this.state.message}</div>
        <button onClick={this.click()} >clik mee !!!</button>
      </div>
    )
  }
}
export default bind;