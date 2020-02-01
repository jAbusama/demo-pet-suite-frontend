import React from 'react'
import { Link } from 'react-router-dom'

function PublicFooter() {
  const date = new Date()
  return (
    <footer className='jumbotron m-0 p-5' id='public-footer'>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3>Phone Support</h3>
            <p>24/7 Call us Now.</p>
            <p className="lead">
              + 1 332 3093 323
            </p>
          </div>

          <div className="col-md-4">
            <h3>CONNECT WITH US</h3>
            <p>We are socialized. Follow us</p>
            <p className="lead">
              <Link to='#' className='p-3'>

                <i className="fab fa-facebook"></i>
              </Link>
              <Link to='#' className='p-3'>
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to='#' className='p-3'>
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to='#' className='p-3'>
                <i className="fab fa-youtube"></i>
              </Link>
            </p>
          </div>

          <div className="col-md-4">
            <h3>CONNECT WITH US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, odio.</p>
            <form action="#" className="subscribe">
              <div className="form-group">
                
                <input type="text" className="form-control" placeholder='Enter Email'/>
                <button type='submit' >
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            &copy; Copyright &copy; {date.getFullYear()} All rights reserved | Pet Suites
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </div>
        </div>

      </div>
    </footer>

  )
}

export default PublicFooter