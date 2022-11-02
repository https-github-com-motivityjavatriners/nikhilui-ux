import React,{useState} from 'react'

const Counter = () => {

    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1);
        }
    }
  return (
    <>
    <div>Counter {count}</div>

    <button onClick={increment}>increment</button>

    <button onClick={incrementFive}>IncrementFive</button>
   
   
    </>
  )
}

export default Counter