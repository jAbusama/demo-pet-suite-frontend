import React from 'react'
import useGlobal from '../services/useGlobal'
import storage from 'store'
import { NavLink } from 'react-router-dom'
import routeLinks from '../Routes'
// import useGlobal from '../services/useGlobal'

function Sidebar() {

  return (
      <div className="sidebar-content sticky-top">
        <div className=' d-flex justify-content-center sidebar-header'>
          <h3 className='logo-web'>Pet Suite</h3>
          {/* <strong className='logo-mobile' >PS</strong> */}
        </div>
        <ul className="nav flex-column sidebar-nav-list">
          {
            routeLinks().map(link => (
              <li className='nav-item ' key={link.key} >
                <NavLink 
                  style={{ textDecoration: 'none' }}  
                  exact
                  activeClassName='selected' 
                  className='nav-link'
                  to={link.path} > 
                    <i className={link.icon}></i>
                    <span>{link.label}</span>
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>    
  )
}

export default Sidebar