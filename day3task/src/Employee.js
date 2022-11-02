import React, { Component } from 'react';
import './App.css';

export default class Employee extends Component {

    constructor(){
        super();


        this.state={
            name:"nikhil",
            companyName:"motivity",
            address:"hyderabad",
            age:27,
            role:"Software eng",
            isDisplay:false
        } 
        // this.changeInfo=this.changeInfo.bind(this);

    }

    changeInfo(){
        console.log("hi iam inside function changeinfo");
        this.setState({isDisplay:true});
        console.log(this.state.name);
    }

    showName(){
        console.log("hi name");
        this.setState({isDisplay:true});
        console.log(this.state.companyName);
    }

    showAddress(){
        console.log(this.state.address);
        this.setState({isDisplay:true});
    }

    shoRole(){
        this.setState({isDisplay:true});
    }

    showAllinfo(){
        this.setState({isDisplay:true});
    }

    hideinfo(){
        this.setState({isDisplay:false});
        

    }



  render() {
    // console.log(this.state.name);
    return (
      <div>
        <h1>Employee data</h1>
        <div>
            {/* <button  onClick={()=>this.changeInfo()}>Change Info</button> */}
            <button className='btn' onClick={()=>this.showName()}>showName</button>
            <button onClick={this.showAddress.bind(this)}>showAddress</button>
            <button onClick={()=>this.showRole()}>showrole</button>
            <button onClick={this.hideinfo.bind(this)}>Hide information</button>
            {/* <button onClick={()=>this.showAllinfo()}>showAllinfo</button> */}
            {this.state.isDisplay && <h1>{this.state.name}</h1>}
           {this.state.isDisplay && <h1>{this.state.address}</h1>}
           {this.state.isDisplay && <h1>{this.state.role}</h1>}
            {/* <h1>{this.state.companyName}</h1>
            <h1>{this.state.address}</h1>
            <h1>{this.state.age}</h1> */}

            {/* <div>
                <h4>Display information {this.state.isDisplay}</h4>
                {this.state.isDisplay && <h1>{this.state.name}</h1>}
                {this.state.isDisplay && <h1>{this.state.companyName}</h1>}
            </div> */}
            
        </div>

      </div>
    )
  }
}
