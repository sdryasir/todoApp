import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { products } from '../products';
import { CartContext } from '../App';

function DetailPage() {
  const {id} = useParams();

  const {cart, setCart} = useContext(CartContext);

  const foundProduct = products.find((product)=>product.id == id);

  const handleCart = (prod)=>{
    setCart([...cart, prod]);
    
  }
  return (
    <div className='detail-wrapper'>
      <img style={{width:'300px'}} src={foundProduct.image} alt="" />
      <h1>{foundProduct.title}</h1>
      <p>{foundProduct.description}</p>
      <button className="btn btn-primary" disabled={cart.find((p)=>p.id == foundProduct.id) ? true : false} onClick={()=>handleCart(foundProduct)}>Add to Cart</button>
    </div>
  )
}

export default DetailPage