import React, { useState } from "react";


const Data=({curElem})=>{

    // console.log(formdata);

    // const[table,setTable]=useState({});

    // setTable=()=>{
    //     console.log(curElem);
    // }



    return(
        <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                    </tr>
                </thead>

                <tbody>          
                                <tr>
                                          <td>{curElem.username}</td>
                                          <td>{curElem.email}</td>
                                          <td>{curElem.phone}</td>
                                          <td>{curElem.password}</td>
                                </tr>
            
                    
                </tbody>
            </table>
        </div>

        </>
    )
};

export default Data;