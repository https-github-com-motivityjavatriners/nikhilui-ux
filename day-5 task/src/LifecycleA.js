import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export default class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'nikhil'
      }

      console.log('LifecycleA Constructor');
    }

    static getDerivedStateFromProps(props,state){

        console.log("lifecycleA getDerivedStateFromProps ")
        return null;
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }  

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate');

        return null;
    }


    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState=()=>{
        alert("hi")
        this.setState({
            name:"nikhil"
        })
    }
    



  render() {
    console.log(`lifecycle render`)
    return (
        <>
      <div>LifecycleA</div>
      <button onClick={this.changeState}>changeState</button>
      <LifecycleB/>
      </>
    )
  }
}
