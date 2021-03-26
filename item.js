import {useState} from 'react';
import { products } from '../Data/product';
import { Link } from 'react-router-dom';
import Shoppingcart from './../ShoppingCart/ShoppingCart';
import axios from "axios";
import { useEffect } from 'react'
export default function ItemSet() {

    let [products,setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products').then(res => setProduct(res.data)).catch(err => console.log(err))
    }, [])

    return (

        products.map(p => <div className="card col-md-2 col-sm-4 col-xs-6 text-center">
            <img src={p.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.price}</p>
                <Link to={"/collection/" + p.link}
                    type="button"
                    className="btn btn-sm btn-outline-success"

                >Add to Cart</Link>

                <br />
                <br />

            </div>
        </div>
        )
    )
}