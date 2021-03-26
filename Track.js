import { Link } from 'react-router-dom';

import './Track.css'
import Table from 'react-bootstrap/Table'

export default function TrackOrder(){
    return(
        <>
         
          <div className="container text-center py-3">
            <h1 className="mb-4">Order Tracking</h1>
            <img src="images/nomi.jpg " className="img-fluid" style={{width: "150px", height: "150px", borderRadius: "30px" }} alt="..."/>
          </div>

      <div className="container">
     
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <section className="my-4">
  
              <h5 className="text-center mt-1 mb-2">Contact us</h5>
  
              <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
  
              <form action="#!">
  
                <div className="md-form md-outline">
                  <input type="text"  className="form-control" id="orderID" placeholder="Order ID"/><br></br>
                </div>
                <div className="md-form md-outline">
                  <input type="email"  className="form-control" id="billingEmail" placeholder="Billing email"/><br></br>
                </div>
          
              </form>
          
              <div className="text-center pt-2 mb-4">
          
                <button type="submit" className="btn btn-primary mb-4">Sign Up</button>
  
              </div>
  
            </section>
        
  
          </div>
    
  
        </div>
    
  
      </div>
    

        <Table striped bordered hover responsive="lg" variant="dark" >
  <thead>
    <tr>
      <th>Tracking Number</th>
      <th>Location</th>
      <th>Date & Time </th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12345678</td>
      <td>Lahore-Pakistan</td>
      <td>9-2-2020</td>
      <td>Received</td>
    </tr>
    <tr>
      <td>32456789</td>
      <td>Karachi</td>
      <td>2-8-2020</td>
      <td>Out for Delivery </td>
    </tr>
    <tr>
      <td>44556677</td>
      <td>multan</td>
      <td>3-8-2020</td>
      <td>Delivered</td>
    </tr>
  </tbody>
</Table>
</>
    )
}