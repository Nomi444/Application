import React, { useState } from 'react';


export default function CheckButton()

{ 
    let array=[1,2,3,4]
    const [cart, setCart] = useState([]);
    let handle=()=>{
       SetX(
           {
               ...cart,
           }
       );
    }
    return(
        <button type="button" onClick={handle} class="btn btn-primary">{X}</button>
    )
}