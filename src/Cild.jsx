import React from 'react'

const Cild = ({setCount,count,addnum}) => {
    let  reslt  = 1+3
    addnum(reslt);
  return (
    <div>
       <button onClick={()=>setCount(count +1)}>+</button>
       <button onClick={()=>setCount(count -1)} disabled ={count <= 0} >-</button> 
        
    </div>
  )
}

export default Cild
