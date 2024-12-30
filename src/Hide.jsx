import React, { useState } from 'react'

const Hide = () => {
    const [hide,setHide] = useState(true);
    
    const show = ()=>{
      setHide(pre => !pre)
    }
  return (
    <div>
      <h1> {hide &&  "hellow"} </h1>
      <button onClick={show}>clik Me</button>
    </div>
  )
}

export default Hide
