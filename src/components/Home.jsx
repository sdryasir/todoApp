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
                                        <button className="btn btn-primary" disabled={cartContext.cart.find((p)=>p.id == product.id) ? true : false} onClick={()=>handleCart(product)}>Add to Cart</button>
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