import React, { useState } from 'react'
import Data from './Data';

const MultipleInputs = () => {

    const[userRegistration,setuserRegistration]=useState({
        username:"",
        email:"",
        phone:"",
        password:""

    })

    const [record,setRecord]=useState([]);

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        console.log(name,value);

        console.log({...userRegistration});

        setuserRegistration({...userRegistration, [name]: value})

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord={...userRegistration,id: new Date().getTime().toString() };

        console.log("hello ",newRecord)

        console.log("hi",record);


        setRecord([...record ,newRecord]);

        setuserRegistration({username:"",email:"",phone:"",password:""})
    }

  const formdata=  record.map((curElem)=>{
    console.log(curElem);
        return(
            <>
            <div className='showDataStyle'>

                <Data curElem={curElem} />

            </div>
            </>
        )
    })
  return (
    <>

        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Fullname</label>
                <input type="text" value={userRegistration.username} name="username" onChange={handleInput}/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" value={userRegistration.email} name="email" onChange={handleInput}/>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input type="number" value={userRegistration.phone} name="phone" onChange={handleInput}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="text" value={userRegistration.password} name="password" onChange={handleInput}/>
            </div>

            <button type='submit'>Registration</button>

        </form>


        <div>
            {formdata}
            {/* <Data  formdata={formdata}/> */}
            
        </div>
    </>
  )
}

export default MultipleInputs