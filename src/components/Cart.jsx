import React, { useContext, useState } from 'react'
import { CartContext } from '../App'

function Cart() {

 const {cart, setCart} = useContext(CartContext);

 const handleIncrement = (id)=>{
  const obj = cart.find((item)=>item.id == id);

  const index = cart.findIndex((itm)=>itm.id == id);

  const updatedObj = {...obj, qty: obj.qty + 1};

  cart[index] = updatedObj;

  setCart([...cart]);
 }

 const handleDecrement = (id)=>{
 const obj = cart.find((item)=>item.id == id);

 if(obj.qty<=1){
  return;
 }

  const index = cart.findIndex((itm)=>itm.id == id);

  const updatedObj = {...obj, qty: obj.qty - 1};

  cart[index] = updatedObj;

  setCart([...cart]);
 }

  return (
    <div style={{margin:'60px'}} className='container'>


    
          <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
          {
      cart.map((item, index) => {
        return (
            <tr>
              <th scope="row">{index+1}</th>
              <td><img style={{width:'50px'}} src={item.image} alt="" /></td>
              <td>{item.title}</td>
              <td>
                <button onClick={()=>handleDecrement(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={()=>handleIncrement(item.id)}>+</button>
              </td>
              <td>
                <h2>${item.price * item.qty}</h2>
              </td>
            </tr>
            )
          })
        } 
          </tbody>
        </table>
        
    </div>
  )
}

export default Cart