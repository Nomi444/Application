import React, { useState } from 'react';
import Home from './Pages/Home';
 import AppBar from './components/AppBar'
 import BottomNav from './components/Footer'
 import  Drive from './components/nouman/file'
 import  RCheckout from './components/nouman/form/form'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Products from './products';
import DetailCricle from './components/Detail';
import Shoppingcart from './ShoppingCart/ShoppingCart';
import {
  useRouteMatch,useParams
} from "react-router-dom";
import api from './components/api/Product'
import cartLib from "./utils/cart";
import ItemsCounter from './itemcounter/itemscounter'
import Checker from './components/app2'
import Thankupage from './ThankYou/page'
import TrackOrder from './TrackingOrder/Track'
function App() {
  const [cart, setCart] = useState([]);
  const clearCart = (_) => setCart([]);
  const addToCart = (p) => setCart(cartLib.addToCart(cart, p));
  const incrementCart = (p) => setCart(cartLib.incrementCart(cart, p))
  const decrementCart = (p) => setCart(cartLib.decrementCart(cart, p))
  const removeFromCart = (p) => setCart(cartLib.removeFromCart(cart, p))
  return (

    <>
   
     <Router>
    
     {/* <AppBar counter={cart.length}/>  */}
     <Checker counter={cart.length}/>
       <Switch>
       <Route exact path='/Home' >
         <Home/>
     </Route>
     <Route  path='/Sign-in' >
       <Drive/>
     </Route>
     <Route  path='/check-out' >
       <RCheckout counter={cart.length} cart={cart}/>
     </Route>
     <Route  path='/Track-order' >
       <TrackOrder/>
       </Route>
       <Route  path='/Thanku' >
       <Thankupage/>
       </Route>
     <Route path='/collection/:category/:id'>
       <ItemsCounter cart={cart} 
       
       cart={cart}
       incrementCart={incrementCart}
       decrementCart={decrementCart}
       removeFromCart={removeFromCart}
       clearCart={clearCart}
       />
        </Route>
     <Route path='/collection/:category' >
       <Shoppingcart incrementCart={incrementCart} addToCart={addToCart} cart={cart}   />
        </Route>
        
   
        <DetailCricle/>
      
     </Switch>
     <BottomNav/>
     
  
    </Router>  
    
    </> 
  
  )

}

export default App;
