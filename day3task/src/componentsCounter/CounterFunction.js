import React, { useState } from 'react'

function CounterFunction() {
    let [count,setcount]=useState(0);

    console.log(count);
    console.log(setcount);

    const increment=()=>{
        setcount(count+1);
    }

    const decrement=()=>{
        setcount(count-1);
    }


  return (
    <>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <div>Counter with Functional component count: {count}</div>

    </>
  )
}

export default CounterFunction