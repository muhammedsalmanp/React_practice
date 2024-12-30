import React, { useState } from 'react'

const Input = () => {
     const [text , setText] = useState("");
     const [desply ,setDesply] = useState ('')
  return (
    
    <div>
      <input type="text" value={text} onChange={(e)=> setText (e.target.value)}  placeholder=' hi entter any thing ' style={{height:"35px",width:"350px", backgroundColor:"black", fontSize:"16px"}}/>

      <button onClick={()=>{setDesply(text);setText("");}}  style={{cursor:"pointer",width:"10px",height:'auto', marginLeft:"3px"}}>+</button>
      <p>{desply}</p>
      
    </div>
  )
}

export default Input
