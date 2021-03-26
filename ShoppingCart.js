import "./ShoppingCart.css"
import React from 'react';
import  {useState} from 'react';
import { useParams } from "react-router-dom"
import api from '../components/api/Product'
import { products } from '../Data/product'
import Products from './../products';
 
import{Link,
  useRouteMatch
} from "react-router-dom";
import Productmap from "./product";
export default function Shoppingcart({addToCart,incrementCart})
{
  let {category } = useParams();
   let [product, ] = useState(() => api.getVisibleProducts(category));
   let { path, url } = useRouteMatch();

return(


product.map(p => (
<Productmap incrementCart={incrementCart} addToCart={addToCart} pro={p} />
))


 
 
)
}