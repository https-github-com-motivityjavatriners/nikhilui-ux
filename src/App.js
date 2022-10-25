import React from 'react';
import './App.css';
import {useState} from 'react';
// import Greet from './component/Greet';
// import Welcome from "./component/Welcome";

function App() {
  let [discount,setdiscount]=useState()
  let [price,abc]=useState(0)
  let [count,setcount]=useState(0)
  let discountPer=20;
  let totalPrice
  let discountprice

  return (
    <div className='container'>
      <div className='card'>
        <h1>Chicken Biryani</h1>
        <img src='https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg' alt='food'/>
     <h1>
       Price:{price}
     </h1>
     <h3>count:{count}</h3>
     <h3>Discount 20% Above 1000</h3>
     <h2>Discount:₹{discount}</h2>
     <button onClick={()=>{
       abc(price+100)
       setcount(count+1)
      //  if(price >=1000){

      //  price =price-(price*discount)/100;

      //  console.log("price is"+discount)
      // }

       console.log((discount=price-(price*discountPer)/100));
 
     }}>Add</button>

<button onClick={()=>{     
       if(count<0 && price<0){
        abc(price==0)
        setcount(count==0) 
       }
       if(count>=0 && price>=100){
        abc(price-100)
        setcount(count-1)
       }
     }}>Remove</button>
  <div>
<button onClick={()=>{
  if(price >=1000){
    totalPrice =price-(price*discountPer)/100;//total amount after discount

    discountprice=price -totalPrice;//amount of disconut
     console.log("Discount"+discountprice);

     setdiscount(discountprice)//discountprice

    abc(totalPrice)//discountAmount

    console.log(`total Bill:${price}`)
  }
  console.log(`total Bill:${price}`)
     }}>Discount</button>
     <h3>Final Bill:</h3><span>{`Quantity:${count}, Price:${price}`}</span>
     </div>
  </div>
  </div>
  );
}

export default App;
