import { React } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
export default function Drive() {
  return (

    <div className="body text-center">

      <main className="form-signin">
        <form>
          <img className="mb-4" src="images/nnn.png" alt="" width="80" height="80" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus /><br></br>
          <label htmlFor="inputPassword" className="visually-hidden">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required /><br></br>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
      </label>
          </div>
          <Link to ="/Thanku">
          <button className="w-100 btn btn-lg btn-primary"  type="submit">Sign in</button></Link>
          <p className="mt-5 mb-3 text-muted">&copy; <b>2017-2021</b></p>
        </form>
      </main>
    </div>

  )
}

