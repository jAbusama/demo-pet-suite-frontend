import React from 'react'
import useGlobal from '../services/useGlobal'

function Navigation({ history }) {
	
	const [gState, gActions] = useGlobal()
	const user = gState.user.email

	const logout = (e) => {
		e.preventDefault()
		gActions.logout()
		history.push('/login')
	}

	return (
		<header id='admin-header'>
			<nav className="navbar navbar-expand-lg navbar-ligth bg-ligth m-3 shadow">
				<button className='btn btn-primary btn-toggler btn-sm d-md-none d-lg-block' onClick={() => gActions.toggleSidebar()}>
					<i className="fas fa-outdent"></i>
				</button>
				<ul className='navbar-nav ml-auto'>
					<li className="nav-item dropdown">
						<span 
							className="nav-link dropdown-toggle" 
							id="navbarDropdown" 
							role="button" 
							data-toggle="dropdown" 
							aria-haspopup="true" 
							aria-expanded="false">
							{user}
						</span>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<button className='dropdown-item'>Profile</button>
							<div className="dropdown-divider"></div>
							<form onSubmit={logout}>
								<button className="dropdown-item" type='submit' >Logout</button>
							</form>	
						</div>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navigation
