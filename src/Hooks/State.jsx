import React, { useState } from 'react'

const State = () => {

    const [count , setCount] = useState(0)



  return (
    <>
    <h2>Count : {count}</h2>

    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>
  )
}

export default State