import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { Link } from 'react-router-dom'
import useGlobal from '../services/useGlobal'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import '../styles/test.css'

function Sidebar() {
  const [gState, gActions] = useGlobal()
  return (    
    <div id='wrapper'>
      <div id='sidebar-wrapper'>
        <ul className='sidebar-nav'>
          {
            gState.routeLinks.map(link => (
              <li key={link.key} classNameName='nav-item'>
                <Link  to={link.path} classNameName='nav-link'>
                 <i className={link.icon}> </i> {link.label}{' '}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar