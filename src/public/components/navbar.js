import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import routeLinks from '../../Routes'

function Navbar() {
  return(
    <React.Fragment>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3">
          <div className='container'>
            <Link to='/' href="" className="navbar-brand">Logo</Link>
            <button 
              className='navbar-toggler' 
              type='button' 
              data-toggle='collapse' 
              data-target='#navbarList' 
              aria-expanded='false' 
              aria-label='Toggle navigation'
              >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id='navbarList'>
              <ul className='navbar-nav ml-auto'>
                {
                  routeLinks().map(route => (
                    route.key === 'register' ? 
                    <li key={route.key} className="nav-item">
                      <NavLink exact className="nav-link btn btn-outline-success" to={ route.path }>
                        { route.label }
                      </NavLink>
                    </li>
                    :
                    <li key={route.key} className="nav-item">
                      <NavLink exact className={`nav-link ${ route.class }`} to={ route.path }>{ route.label }</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </nav>

    </React.Fragment>
  )
}

export default Navbar