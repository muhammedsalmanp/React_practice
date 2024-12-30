
//// if/ else 


// import React, { Component } from 'react'

// class UserGreet extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: true
//         }
//     }


//     render() {

//         if (this.state.isLoggedIn) {
//             return <div>welcome User you are Loggin </div>

//         } else {
//             return <div>Welcome our Gest</div>
//         }
//     }
// }

// export default UserGreet

// Element variables

// import React, { Component } from 'react'

// class UserGreet extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//            isLoged : true
//         }
//       };

//   render() {
//     let Message ;
//     if(this.state.isLoged){
//         Message =  <div>welcome User you are Loggin </div>
//     }else{
//         Message = <div>Welcome our Gest</div>
//     }
//     return Message
//   }
// }
// export default  UserGreet 


//Ternary Conditional operator 

// import React, { Component } from 'react'

// class UserGreet extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLogedin: false
//         }
//     }
//     render() {
//         return this.state.isLogedin ? (
//             <div>welcome User you are Loggin </div>
//         ) : (
//             <div>welcome new gust </div>
//         )
//     }
// }

// export default UserGreet




//    short circuit operator

import React, { Component } from 'react'

class UserGreet extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLogedIn : true
     }
   }
   
  render() 
  {
   return this.state.isLogedIn &&  <div>hi user</div>
  }
}

export default UserGreet
