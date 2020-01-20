import React from 'react'
import useGlobal from '../services/useGlobal'
import storage from 'store'
import { NavLink } from 'react-router-dom'
import routeLinks from '../Routes'
// import useGlobal from '../services/useGlobal'

function Sidebar() {

  return (
    <React.Fragment>
      <div className=' d-flex justify-content-center sidebar-header'>
        <h3 className='logo-web'>Pet Suite</h3>
        <strong className='logo-mobile' >PS</strong>
      </div>
      <ul className="nav flex-column sidebar-nav-list">
        {
          routeLinks().map(link => (
            <NavLink key={link.key} exact style={{ textDecoration: 'none' }} activeClassName='selected' to={link.path} > 
              <li className='nav-item '>
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </li>
            </NavLink>
          ))
        }
      </ul>
    </React.Fragment>
    
  )
}

export default Sidebar