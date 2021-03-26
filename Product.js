import{Link
  } from "react-router-dom";

export default function Productmap({incrementCart, addToCart  , pro })
{
    
   return(
    <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="card mb-4 col-lg-6 col-sm-8">
        <img className="card-img-top img-fluid" style={{width :"30%"}}src={pro.img}  
        />
        <div className="card-body">
          <h3 className="card-title">{pro.name}</h3>
          <h4>{pro.price}</h4>
          <p className="card-text">{pro.description}</p>
          <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
          4.0 stars
          <br/>
          <br/>
          <button onClick={() => incrementCart(pro)} type="button" className="btn  btn-primary mr-2">Add this item</button>
          <Link to={"/collection/category/" + pro.id}
                        type="button"
                    className="btn btn-outline-primary"
                    onClick={() => addToCart(pro)}
                    
                    
                    

                     >
                       <i className="fa fa-plus" ></i>
                        View
                       </Link>

          </div>
      </div>
    </div>
  </div>

   )

}