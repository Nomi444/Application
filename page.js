
import { Link } from 'react-router-dom';

export default function ThankuPage(){
    return(
        <>
<div className="jumbotron text-center">
<span> <img src="images/bb.gif  "  className="img-fluid "   style={{width: "150px", height: "150px", borderRadius: "30px", marginTop: "60px" }} alt="..."/> </span>
  <h1 className="display-3"><p className="text-success">Thank You! </p></h1>
  <p>Your order was completed successfully.</p>
  <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
  <hr/>
  <p>
    Having trouble? <a href="#">Contact us</a>
  </p>

 
  <p className="lead">
    <Link to="/Home">
  <button type="button" className="btn btn-primary"> Continue to home page</button></Link>
    
  </p>
  
</div>


        </>
    )
}

