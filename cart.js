import React from 'react';
 function addToCart(cart, product, qty = 1) {
  
  if (cart.findIndex((prod) => prod.id === product.id) === -1)
    return  ( 
      [...cart, { ...product, cartQty: qty }] 
      )

      else
     return incrementCart(cart, product)
}

   



function incrementCart(cart, product, qty = 1){
  return cart.map((p) =>
      p.id === product.id
        ? {
            ...product,
            cartQty: p.cartQty + qty,
          }
        : p
    );
}

function removeFromCart(cart, product){
  return cart.filter(p => p.id !== product.id);
}

function decrementCart(cart, product, qty = 1){
  if(product.cartQty <= 1)
    return removeFromCart(cart, product);
  else
    return incrementCart(cart, product, -qty)
}


function clearCart() {
  return [];
}

function numProductsUnique(cart){
  return cart.length;
}
function numProductsAll(cart){
  return cart.reduce((sum, p) => sum + p.price, 0);
}

function grandTotal(cart){
  return cart.reduce((sum, p) => sum + p.price * p.cartQty, 0);
}


export default {addToCart, incrementCart, decrementCart, removeFromCart, clearCart, numProductsUnique, numProductsAll, grandTotal};
