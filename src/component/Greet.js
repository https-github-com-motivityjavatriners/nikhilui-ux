import React from 'react';


const Greet=(props)=>{

     console.log(props);

    return( 
    <>
    
    <h1>Hello {props.name}</h1>

    {/* console.log("hi"+props.children); */}
    <h1>
    {props.children.name}
    </h1>
    </>
    );
}


export default Greet;