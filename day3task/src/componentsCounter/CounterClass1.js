import React, { Component } from 'react'

export default class CounterClass1 extends Component {
    constructor(){

        super();

        this.state={
            count:0
        }
    }

    increment=()=>{
        // this.setState({
        //     count:this.state.count+1
        // },()=>{console.log("Callback Value",this.state.count);})

        this.setState((prevState)=>({
            count:prevState.count+1
        }))
        
        console.log(this.state.count);
    }

    incrementFive=()=>{
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
        <>
      <div>CounterClass </div>
      <h1>{this.state.count}</h1>
      <button onClick={()=>this.incrementFive()}>increment</button>

      </>
    )
  }
}
