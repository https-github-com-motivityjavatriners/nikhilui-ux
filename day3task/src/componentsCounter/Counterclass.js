import React, { Component } from 'react'

export class Counterclass extends Component {

    constructor(props){
        super(props);

        this.state={
            count:0
        }

    }

    decrement=()=>{
        this.setState({count:this.state.count-1});
    }

    increment=()=>{
        this.setState({count:this.state.count+1});
    }
  render() {
    return (
      <div>

        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <h1>count: {this.state.count}</h1>

      </div>
    )
  }
}

export default Counterclass