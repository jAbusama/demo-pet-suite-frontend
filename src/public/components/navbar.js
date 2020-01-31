import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <React.Fragment>
      <header className='public-header'>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark py-4">
          <Link to='/' href="" className="nabvar-brand">Logo</Link>
          <button 
            className='navbar-toggler' 
            type='button' 
            data-taggle='collapse' 
            data-target='#navbarList' 
            aria-expanded='false' 
            aria-label='Toggle navigation'
            >
              <span className="navbar-toggle-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id='navbarList'>
            <ul className='navbar-nav ml-auto'>
              <li className="nav-item">
                <Link className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Book Now</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Rooms</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Navbar