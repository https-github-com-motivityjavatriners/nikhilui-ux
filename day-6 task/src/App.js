// import logo from './logo.svg';
import './App.css';
import React from 'react'
import ComponentC from './ComponentC';
import CounterOne from './componentreducer/CounterOne';


export const UserContext =React.createContext()
export const ChannelContext=React.createContext()




function App() {
  return (
    <div className="App">

      {/* <UserContext.Provider  value={'nikhil'}>

        <ChannelContext.Provider value={'kumar'}>
        <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      <CounterOne/>
      
    </div>
  );
}

export default App;
