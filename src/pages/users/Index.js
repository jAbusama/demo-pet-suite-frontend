import React, { useState, useEffect } from 'react'
import useGlobal from '../../services/useGlobal'
import MainLayout from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'

function Users(props) {

	const searchState = {
		search: ''
	}

	const [state, setState] = useState(searchState)
	const [gState, gActions] = useGlobal()

	useEffect(() => {
		if(!gState.usersLoaded){
			gActions.getUsers()
		}
	})

	const tableHeader = [
		{
			title: 'Name',
			key: 'name',
		},
		{
			title: 'Email',
			key: 'email',
		},
		{
			title: 'Mobile',
			key: 'mobile',
		},
		{
			title: '',
			key: 'actions'
		}
	]

	const tableData = () => {
		if(state.search.legth > 3) {
			return gState.users.filter(user => JSON.stringify(user).search(new RegExp(state.search, 'ig')) > -1)
		}
		return gState.users
	}

	const userOption = (
		<div>
		<span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		</span>
		<div className="dropdown-menu" aria-labelledby="navbarDropdown">
			<button className='dropdown-item'>Edit</button>
			<div className="dropdown-divider"></div>
			<form>
				<button className="dropdown-item" type='submit' >Delete</button>
			</form>	
		</div>
		</div>
	)
	return (
		<MainLayout props={props}>
			<div className="filters">
				<div className="row">
					<div className="col">
						<button className='btn btn-success btn-sm'>Search</button>
					</div>
					<div className="col d-flex justify-content-end">
						<button className='btn btn-primary btn-sm'>Add User</button>
					</div>
				</div>
			</div>

			<div className="records">
				<div className="record-header">
					<div className="breadcrumb">
						Breadcrumb
					</div>
					<span className="record-title">
						User
					</span>
					{' '}
					<span className="record-subtitle small">
						Manage All User
					</span>
				</div>

				<div className="card">
					<div className="card-body">
						<table className='table table-sm'>
							<thead>
								<tr>
									{tableHeader.map(header => (
										<th className="" key={header.key}>{header.title}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{tableData().map(user => (
									<tr key= {user._id}>
										<td>{user.firstname} {user.lastname}</td>
										<td>{user.email}</td>
										<td>{user.mobile}</td>
										<td>{userOption}</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className='footer'>
							<nav arial-label="Page Navigationn example" >
								<ul className="pagination">
									<li className="page-item">
										<Link to='#' className='page-link' aria-label="Previous">
											<span aria-hidden='true'>&laquo;</span>
											<span className='sr-only'>Previous</span>
										</Link>
									</li>
									<li className="page-item">
										<Link to='#' className='page-link'>1</Link>
									</li>
									<li className="page-item">
										<Link to='#' className='page-link'>2</Link>
									</li>
									<li className="page-item">
										<Link to='#' className='page-link' aria-label="Next">
											<span aria-hidden='true'>&laquo;</span>
											<span className='sr-only'>Next</span>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Users