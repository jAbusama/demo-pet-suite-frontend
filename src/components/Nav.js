import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useGlobal from '../services/useGlobal'

function Navigation() {
	const [gState, gActions] = useGlobal()
	return (
		<nav classNameName='navbar navbar-expand-sm navbar-dark bg-dark sticky-top'>
			<div classNameName='container-fluid'>
				<Link to='/' classNameName='navbar-brand'>
					logo
				</Link>
				<button classNameName='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive'>
					<span classNameName='navbar-toggler-icon' />
				</button>
				<div classNameName='collapse navbar-collapse' id='navbarResponsive'>
					<ul classNameName='navbar-nav ml-auto'>
						{
							gState.routeLinks.map(link => (
								<li key={link.key} classNameName='nav-item'>
									<Link  to={link.path} classNameName='nav-link'>
										{link.label}{' '}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</nav>
		
	)
}

export default Navigation
