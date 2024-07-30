
import React, { useState } from "react"

function FormData(){
    const[increment,setIncrement]=useState(0)

    let initial=1
    const IncBy1=(()=>{
        setIncrement(initial+increment)
        console.log("clicked")
    })

    const decby1=(()=>{
        increment==0?alert("value is zero"):setIncrement(increment-1)
    })

    return(
        <div>
            <h1>incriese by1 {increment}</h1>
            <button onClick={IncBy1}>increment</button>
            <button onClick={decby1}>decrement</button>
        </div>
    )
}
export default FormData;