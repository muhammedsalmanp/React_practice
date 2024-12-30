import React,{ useState } from 'react'
import Cild from './Cild'

const UseCounder = () => {
    function addnum (a){
        setResult(a)
    }
  const [count , setCount] = useState(0)
  const [result , setResult] = useState (0)
  return (
    <>
    <Cild  setCount= {setCount} count ={count}  addnum ={addnum}/>
    <h1 >{count}</h1>
    <h1> result = {result}</h1>
    </>
  )
}

export default UseCounder
