import React from 'react'
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom'
import useGlobal from '../services/useGlobal'

function Sidebar() {
  const [gState, gActions] = useGlobal()
  const routeLinks = gState.routeLinks
  return (
    <div className='wrapper'>
      <div id="sidebar">
        <div className='sidebar-header'>
          <h3>Pet Suite</h3>
        </div>
        <ul className="nav flex-column sidebar-nav-list">
          {
            routeLinks.map(link => (
              <NavLink key={link.key} exact style={{textDecoration: 'none'}} activeClassName='selected' to={link.path} > 
                <li className='nav-item'>
                  <i className={link.icon}></i>
                  {link.label}
                </li>
              </NavLink>
            ))
          }
        </ul>
      </div>
    </div>
    
  )
}

export default Sidebar