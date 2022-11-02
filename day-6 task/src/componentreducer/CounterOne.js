import React,{useReducer} from 'react'


const initialState=0

const reducer=(state,action)=>{

    console.log('hello state',state);
    console.log('hello action',action);

    switch(action){
        case 'increment':
            return state+1
        
        case 'decrement':
            return state-1
        
        case 'reset':
            return state=0 
        default:
            return state      
    }

}

console.log('hi reducer',reducer);


const CounterOne = () => {

  const [count,dispatch]=  useReducer(reducer,initialState);

  console.log('hi count',count);
  console.log('hello dispatch',dispatch)

  return (
    <div>

        <div>{count}</div>

        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button  onClick={()=>dispatch('reset')}> Reset</button>
    </div>
  )
}

export default CounterOne