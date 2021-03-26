import './item.css'
 import { Link} from 'react-router-dom';
 import Grid from '@material-ui/core/Grid';
 import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
 import SearchIcon from '@material-ui/icons/Search';
 import IconButton from "@material-ui/core/IconButton";

   export default function Checker({counter})
   {
     return(
     
           
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary"  aria-label="Third navbar example">
            
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src="images/d.png" style={{width: "120px"}}/></a>
      <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0  "  >
          <li className="nav-item active">
        
            <Link to="/Home"className="nav-link" >Home</Link>
          </li>
          <li className="nav-item active">
          <Link to="/Detail" className="nav-link "  >Detail</Link>
          </li>
          <li className="nav-item active">
            <Link to="/check-out" className="nav-link "  >Checkout</Link>
          </li>
          <li className="nav-item active">
            <Link to="/Track-order" className="nav-link "  >Track my Order</Link>
          </li>
          <li className="nav-item active">
            <Link to="/Sign-in"className="nav-link "  >Login</Link>
          </li>
          <li className="nav-item active">
            <Link to="/Thanku"className="nav-link "  >Thank You</Link>
          </li>
         
       
       
        </ul>
        <div>
         
         <Grid >
           
           <Grid item xs={16}>
            
             <ShoppingCartIcon  style={{ marginRight:'8',color: "black" }}  />
            
           </Grid>
           </Grid>
                  </div>
                <div> <h5 style={{paddingBottom: "6px", paddingRight: "8px", color: "yellow"}}> {counter}</h5></div>
         {/* <form>  */}
           {/* <input className="form-control" type="text" placeholder="Search" aria-label="Search"/> */}
           <form className="d-flex">
      <input className="form-control me-0" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="button">
      <i className="fa fa-search"></i>
     </button>
                
           </form> 
      
      </div>
      </div>
  </nav>

  

     )

   }


    


