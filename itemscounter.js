import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import api from '../components/api/Product'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';

export default function ItemsCounter({ cart, incrementCart, decrementCart, removeFromCart, clearCart }) {
 
  let { id } = useParams();
  let [product,] = useState(() => api.getVisibleProductsbyId(id));
  console.log(cart)
  const totalPrice = cart.reduce((sum,p) => sum + p.price * p.quantity, 0)
  return (
    <>
  <div style={{margin: "20px"}}>
    
    {
    cart.length > 0 && <button className="btn btn-lg btn-outline btn-danger"  onClick={clearCart}> Clear All Items </button>
  }
  
   
<div className="container text-center" style={{marginTop: "20px"}}>
<h3> {!cart.length ? "Cart is empty" : "Shopping Cart:"}</h3><br></br>
<ul>
{cart.map((p) => (
    <li key={p.id}>
  <div className="row" style={{marginBottom: "60px"}}>
    <div className="col-md-2 col-sm-4 col-xs-6 ">
    <img src={p.img}  alt="..."  height= '200'/>
   
  <button style={{marginTop: "20px"}} onClick={() => incrementCart(p)}> + </button>
  {" "}{p.cartQty}{" "}
  <button onClick={() => decrementCart(p)}> - </button>
  {" "}
  
    </div>
    <div className="col-md-2 col-sm-4 col-xs-6 ">
    <button className="btn btn-danger btn-sm px-3" style={{marginTop: "20px"}} onClick={() => removeFromCart(p)}> X </button>
    </div>
    <div className="col-md-2 col-sm-4 col-xs-6 " style={{marginTop: "20px"}}>
     <h5>{p.price} </h5>
     
    </div>
    
  </div>
  </li>
    ))}
</ul>
    <Link to="/check-out">
     <button type="button" className="btn btn-lg btn-primary" >   Checkout </button>
     </Link>

   
</div>

</div> 

    </>
  
  )

}



























/* /* <div className="py-5 bg-light">
        <div className="container text-center">
          <h3> {!cart.length ? "Cart is empty" : "Shopping Cart:"}</h3>
          <ul>
            {cart.map((p) => (
              <li key={p.id}>
                {`${p.cartQty} units of "${p.title}" in cart `}
                <button onClick={() => incrementCart(p)}> + </button>
                {" "}{p.cartQty}{" "}
                <button onClick={() => decrementCart(p)}> - </button>
                {" "}
                
                <button className="btn btn-danger btn-sm px-3" onClick={() => removeFromCart(p)}> X </button>
              </li>
            ))}
          </ul>
          {
            cart.length > 0 && <button className="btn btn-sm btn-outline btn-danger" onClick={clearCart}> clear </button>
          }
       </div>
      </div> */ 