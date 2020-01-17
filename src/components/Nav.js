import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useGlobal from '../services/useGlobal'

function Navigation() {
	const [gState, gActions] = useGlobal()
	const logout = () => {
		gActions.logout()
	}

	return (
		<div className='sm-shadow mt-3'>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button className='btn btn-info'>
				<i className="fas fa-outdent"></i>
				</button>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<ul className='navbar-nav ml-auto'>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<button className='dropdown-item'> Profile</button>
							<div className="dropdown-divider"></div>
							<button className="dropdown-item" > Logout</button>
						</div>
					</li>
				</ul>
			</nav>
		</div>
		
	)
}

export default Navigation
