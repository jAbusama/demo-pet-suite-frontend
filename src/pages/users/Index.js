import React, { useState, useEffect } from 'react'
import useGlobal from '../../services/useGlobal'
import MainLayout from '../../layouts/MainLayout'
import CreateForm from './CreateForm'
import { Link } from 'react-router-dom'

function Users(props) {

	const searchState = {
		search: '',
		showCreate: false
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

	const userOption = (id) => (
		<div className='btn-option'>
			<span className="btn btn-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<i className="fas fa-caret-down"></i>
			</span>
			<div className="dropdown-menu" aria-labelledby="navbarDropdown">
				<button className='dropdown-item options btn-sm'>Edit</button>
				<div className="dropdown-divider"></div>
					<button className="dropdown-item options btn-sm" onClick={() => gActions.deleteUser(id)} >
						Delete
					</button>
			</div>
		</div>
	)
	
	return (
		<MainLayout props={props}>
			{state.showCreate && <CreateForm state={state} setState={setState} />}

			<div className="filters">
				<div className="row">
					<div className="col">
						<div className=" bg-light rounded rounded-pill shadow-sm">
							<div className="input-group search ">
								<input type="search" placeholder="What're you searching for?" aria-describedby="button-search" className="form-control border-0 bg-light"/>
								<div className="input-group-append">
									<button id="button-seacrh" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div className="col input-group d-flex justify-content-end">
						<button className='btn btn-primary btn-sm' onClick={() => setState({...state, showCreate: true})}>
							<i className="fas fa-plus-circle"></i>
							Add User
						</button>
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
						<div className='table-border'>
							<table className='table record-table table-sm table-hover'>
								<thead>
									<tr>
										{tableHeader.map(header => (
											<th className="" key={header.key}>{header.title}</th>
										))}
									</tr>
								</thead>
								<tbody>
									{tableData().length !== 0 ? (tableData().map(user => (
										<tr key= {user._id}>
											<td>{user.firstname} {user.lastname}</td>
											<td>{user.email}</td>
											<td>{user.mobile}</td>
											<td>{userOption(user._id)}</td>
										</tr>
									))) : (<tr><td>No Data</td></tr>) }
								</tbody>
							</table>
						</div>
						<div className='table-footer'>
							<nav arial-label="d-flex Page Navigationn example" >
								<ul className="pagination justify-content-end">
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
											<span aria-hidden='true'>&raquo;</span>
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
