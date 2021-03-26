import ReactStars from "react-rating-stars-component";
import React from "react";
import FaStar from "react-icon/fa";
import { render } from "react-dom";
 
const StarRating = () => {
 
return(
  <div>
    {[...Array(5)].map(star => {
      return <FaStar size={100} />;
    })}
  </div>
);

export default StarRating;