import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useGlobal from '../services/useGlobal'

function Navigation() {
	const [gState, gActions] = useGlobal()
	return (
		<div className='sm-shadow mt-3'>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button className='btn btn-info'>
				<i class="fas fa-outdent"></i>
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
							<li className='dropdown-item'> Profile</li>
							<div className="dropdown-divider"></div>
							<li className="dropdown-item"> Logout</li>
						</div>
					</li>
				</ul>
			</nav>
		</div>
		
	)
}

export default Navigation
