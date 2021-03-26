
import {useEffect} from 'react';
import './form-validation.css';
import myValidation from "./form-validation"    
import Inputfield from './Inputfield';
import Showitem from './showitem';
export default function RCheckout({counter,cart}) {
  useEffect(() => myValidation(), []);

      return (

 <div className="bg-light">
   
<div className="container">
 <main>
    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src="images/check-out.png" alt="" width="80" height="80"/>
      <h2>Checkout form</h2>
      <p className="lead"><strong>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</strong></p>
    </div>

    <div className="row g-3">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge bg-secondary rounded-pill">{counter}</span>
        </h4>
        <Showitem cart={cart}  />
     

        
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            
            <Inputfield column="col-sm-6" inputid="firstName" inputtext="First Name" />

            <Inputfield column="col-sm-6" inputid="lastName" inputtext="Last Name"/>



             <div className="col-12">
              <label htmlFor="username"className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input type="text"className="form-control" id="username" placeholder="Username" required/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div> 

            <div className="col-12">
              <label htmlFor="email"className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email"className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address"className="form-label">Address</label>
              <input type="text"className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2"className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text"className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="col-md-5">
              <label htmlFor="country"className="form-label">Country</label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state"className="form-label">State</label>
              <select className="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip"className="form-label">Zip</label>
              <input type="text"className="form-control" id="zip" placeholder="" required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
            <input type="checkbox"className="form-check-input" id="same-address"/>
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox"className="form-check-input" id="save-info"/>
            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio"className="form-check-input" checked required/>
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio"className="form-check-input" required/>
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio"className="form-check-input" required/>
              <label className="form-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name"className="form-label">Name on card</label>
              <input type="text"className="form-control" id="cc-name" placeholder="" required/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number"className="form-label">Credit card number</label>
              <input type="text"className="form-control" id="cc-number" placeholder="" required/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
               </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration"className="form-label">Expiration</label>
              <input type="text"className="form-control" id="cc-expiration" placeholder="" required/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
              </div>
            

            <div className="col-md-3">
              <label htmlFor="cc-cvv"className="form-label">CVV</label>
              <input type="text"className="form-control" id="cc-cvv" placeholder="" required/>
              <div className="invalid-feedback">
                Security code required
              </div>
              </div>
              </div>            
          

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  

  <footer className="my-5 pt-5 text-muted text-center text-small bg-light" >
    <p className="mb-1">&copy; 2017–2021 DARAZ</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="#">Privacy</a></li>
      <li className="list-inline-item"><a href="#">Terms</a></li>
      <li className="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
  </main>
</div>

</div>

)
}

