import React, { Component } from 'react'

export default class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'nikhil'
      }

      console.log('LifecycleB Constructor');
    }

    static getDerivedStateFromProps(props,state){

        console.log("lifecycleB getDerivedStateFromProps ")
        return null;
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount ')
    }  
    
    
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null;
    }


    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

   

  render() {
    console.log(`lifecycleB render`)
    return (
        <>
      <div>LifecycleB</div>
      
      </>
    )
  }
}
