// import React from 'react'

//  function FunClik() {
//    function testCliker(){
//      console.log("fuction Ckiked");

//     };
//   return (
//     <div>
//       <button onClick={testCliker}> Clik me </button>
//     </div>
//   )
// }
// export default FunClik ; 

import React, { Component } from 'react'

class FunClik extends Component {
  ClikMe (){
    console.log("you are cliked me");
  };

  render() {
    return (
      <div>
        <button onClick={this.ClikMe}>clik Me</button>
      </div>
    )
  }
}

export default FunClik
