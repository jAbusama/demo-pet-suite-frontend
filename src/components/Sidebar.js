import React from 'react'
import useGlobal from '../services/useGlobal'
import { NavLink } from 'react-router-dom'
import routeLinks from '../Routes'

function Sidebar() {

  const [ gStates, gActions ] = useGlobal();
  return (
      <div className="sidebar-content sticky-top">
        <div className='d-flex align-items-center text-center sidebar-header'>
            <button className="btn btn-primary btn-toggler btn-sm float-left d-md-none" onClick={() => gActions.toggleSidebar()}>
              <i className="fas fa-outdent"></i>
            </button>
            <h3 className='logo-web'>Pet Suite</h3>
            <h4 className='logo-web d-none d-md-block d-lg-none'>PS</h4>
          {/* <strong className='logo-mobile' >PS</strong> */}
        </div>
        <ul className="nav flex-column sidebar-nav-list p-2">
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