import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
// import api from '../components/api/Product'
import ItemSet from './item';
const Card = () => {
    let { categorylink } = useParams();
    //  let [products,setproduct] = useState(() => api.getVisibleProducts(categorylink));
   


    return (
        <div className="container">
            <div className="row">
                <ItemSet />
            </div>
        </div>
    );
}

export default Card;