import React, { useState } from 'react'


export const Counter = () => {
    const[count,setCount]=UseState(()=>{
        return count+1
    })
    
  return (
    <div>counter{count}</div>
  )
}
export default Counter;