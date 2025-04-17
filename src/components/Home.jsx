import { useState, useContext } from "react"
import { CartContext } from "../App";
import {products} from '../products'
import { Link } from "react-router";

function Home() {

    const [productList, setProductList] = useState(products);
    const cartContext = useContext(CartContext);

    const truncate = (str, maxLength) => {
        return  str && str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };


      const handleCart = (prod)=>{
        cartContext.setCart([...cartContext.cart, prod]);
      }

      const handleIncrement = (id)=>{
        const obj = cartContext.cart.find((item)=>item.id == id);
      
        const index = cartContext.cart.findIndex((itm)=>itm.id == id);
      
        const updatedObj = {...obj, qty: obj.qty + 1};
      
        cartContext.cart[index] = updatedObj;
      
        cartContext.setCart([...cartContext.cart]);
       }


       const handleDecrement = (id)=>{
        const obj = cartContext.cart.find((item)=>item.id == id);
       
         const index = cartContext.cart.findIndex((itm)=>itm.id == id);

         if(obj.qty<=1){
            return;
           }
       
         const updatedObj = {...obj, qty: obj.qty - 1};
       
         cartContext.cart[index] = updatedObj;
       
         cartContext.setCart([...cartContext.cart]);
        }

    return (
       <>
       <div className='container mt-5'>
            <div className="row">

                {
                    productList.map((product, index) => {
                        return (
                            <div className="col-md-3 mb-4">
                                <div className="card h-100">
                                    <img src={product.image} style={{aspectRatio:1/1}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link to={`/products/${product.id}`}><h5 className="card-title">{product.title}</h5></Link>
                                        <p className="card-text">{truncate(product.description, 50)}</p>
                                        <a href="#" className="btn btn-primary me-3">$ {product.price}</a>
                                            {
                                                cartContext.cart.find((p)=>p.id == product.id) ? 
                                                <>
                                                    <button onClick={()=>handleDecrement(cartContext.cart.find((p)=>p.id == product.id).id)}>-</button>
                                                    <span>{ cartContext.cart.find((p)=>p.id == product.id).qty }</span>
                                                    <button onClick={()=>handleIncrement(cartContext.cart.find((p)=>p.id == product.id).id)}>+</button>
                                                </>
                                                :<button className="btn btn-primary" onClick={()=>handleCart(product)}>Add to Cart</button>
                                            }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
       </>
    )
}

export default Home