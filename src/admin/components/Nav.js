import React from 'react'
import { Link } from 'react-router-dom'
import routeLinks from '../Routes'

function Nav() {
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark sticky-top'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					logo
				</Link>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarResponsive'>
					<ul className='navbar-nav ml-auto'>
						{routeLinks.map(link => (
							<li className='nav-item'>
								<Link to={link.path} className='nav-link'>
									{link.label}{' '}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Nav
