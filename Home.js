import CarouselSlide from '../components/Carousel'
import AppBar from '../components/AppBar'
import Card from '../components/Card'
import  DetailCircle from '../components/Detail'
import  Drive from '../components/nouman/file'
import ReactStars from "react-rating-stars-component";

import {Link} from 'react-router-dom'; 

  
export default function Home(){
    return(
       
        <div>
            <CarouselSlide />
             <Card />
        </div>
    )
}