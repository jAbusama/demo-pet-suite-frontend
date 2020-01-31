import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import routeLinks from '../../Routes'

function Navbar() {
  return(
    <React.Fragment>
      
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top py-4">
        <div className='container'>
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
              {
                routeLinks().map(route => (
                  <li key={route.key} className="nav-item">
                    <NavLink exact className="nav-link" activeClass to={ route.path }>{ route.label }</NavLink>
                  </li>
                ))
              }
              {/* <li className="nav-item">
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
              </li> */}
            </ul>
          </div>
          </div>
        </nav>

    </React.Fragment>
  )
}

export default Navbar